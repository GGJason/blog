
``` bash

$ systemctl status docker.service
● docker.service - Docker Application Container Engine
   Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
   Active: failed (Result: exit-code) since Sun 2020-11-29 22:04:36 EST; 53s ago
     Docs: https://docs.docker.com
  Process: 3460 ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock (code=exited, status=1/FAILURE)
 Main PID: 3460 (code=exited, status=1/FAILURE)

Nov 29 22:04:36 WeBIM-IO-Server systemd[1]: docker.service: Service hold-off time over, scheduling restart.
Nov 29 22:04:36 WeBIM-IO-Server systemd[1]: docker.service: Scheduled restart job, restart counter is at 3.
Nov 29 22:04:36 WeBIM-IO-Server systemd[1]: Stopped Docker Application Container Engine.
Nov 29 22:04:36 WeBIM-IO-Server systemd[1]: docker.service: Start request repeated too quickly.
Nov 29 22:04:36 WeBIM-IO-Server systemd[1]: docker.service: Failed with result 'exit-code'.
Nov 29 22:04:36 WeBIM-IO-Server systemd[1]: Failed to start Docker Application Container Engine.

```

``` bash

$ dockerd
INFO[2020-11-29T22:13:37.806946942-05:00] Starting up
dockerd needs to be started with root. To see how to run dockerd in rootless mode with unprivileged user, see the documentation
webim@WeBIM-IO-Server:/etc/systemd/user$ sudo dockerd
INFO[2020-11-29T22:13:43.086812699-05:00] Starting up
failed to load listeners: group dockerroot not found

```