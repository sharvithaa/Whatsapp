# Get IP Address
Get-NetIPAddress | Select-Object IPAddress | Out-File -Append -FilePath $logFile

# Check Free Disk Space
Get-PSDrive -PSProvider FileSystem | Select-Object Name, Free, Used | Out-File -Append -FilePath $logFile

# Get Currently Running Processes
Get-Process | Sort-Object CPU -Descending | Select-Object -First 10 | Out-File -Append -FilePath $logFile