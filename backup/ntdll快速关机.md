哇，今天才知道nedll中有一个未公开函数NtShutdownSystem，可以做到绕过通知应用快速实现关机，就是不通知应用只告诉驱动"我要断电了"然后就调用驱动HalReturnToFirmware这个位于抽象层的文件去关机了，貌似是已知ring3用户层最快的关机了，几乎可以一秒左右关机，当然直接调用HalReturnToFirmware更快但是得要写驱动才行太麻烦了，不过这两个方法都会损失数据，这是一个代码示例了(安全措施约等于没有)
```
import ctypes
import time

 定义所需函数和常量
ntdll = ctypes.WinDLL('ntdll')

RtlAdjustPrivilege = ntdll.RtlAdjustPrivilege
RtlAdjustPrivilege.argtypes = [ctypes.c_uint, ctypes.c_uint, ctypes.c_uint, ctypes.POINTER(ctypes.c_uint)]
RtlAdjustPrivilege.restype = ctypes.c_uint

NtShutdownSystem = ntdll.NtShutdownSystem
NtShutdownSystem.argtypes = [ctypes.c_uint]
NtShutdownSystem.restype = ctypes.c_uint

SHUTDOWN_ACTION = 0  # 0 = 关机 (来自SDK的枚举定义)


def force_shutdown():
    # 1. 获取关机特权
    prv = ctypes.c_uint(0)
    RtlAdjustPrivilege(19, 1, 0, ctypes.byref(prv))  # 19 = SE_SHUTDOWN_PRIVILEGE

    # 2. 尝试刷新磁盘缓存（异步操作，不保证完成）
    ctypes.windll.kernel32.FlushFileBuffers(ctypes.c_uint(-1))  # -1 = 所有分区

    # 3. 广播关机消息（快速发送不等待）
    WM_QUERYENDSESSION = 0x0011
    WM_ENDSESSION = 0x0016
    ctypes.windll.user32.SendMessageTimeoutW(
        0xFFFF,  # HWND_BROADCAST
        WM_QUERYENDSESSION,
        0,
        0x00000001,  # ENDSESSION_CLOSEAPP
        0,  # SMTO_ABORTIFHUNG
        300,  # 超时时间300ms
        None
    )



    # 4. 立即执行关机
    NtShutdownSystem(SHUTDOWN_ACTION)


if __name__ == "__main__":

 force_shutdown()
```
还有一些别的未公开函数比如彩虹猫就用了一个实现蓝屏，没一一研究了