# 服务端整合包（主文件夹） Server Pack(Main Folder)
## 命名
命名格式如下，[]中为需要填入的内容。<br>
[MC本体版本号]_forge[forge版本号]<br>

## manifest.json文件说明
[manifest.json文件wiki](https://zh.wikipedia.org/wiki/%E6%B8%85%E5%8D%95%E6%96%87%E4%BB%B6)
在Java平台中, 清单文件（Manifest file）是JAR档案[4][5]中包含的特殊文件。<br>
Manifest文件被用来定义扩展或档案打包相关数据，是一个元数据文件，它包含了不同部分中的名/值对数据。<br>
如果一个JAR文件被用来作为可执行文件，那么其中的Manifest文件需要指出该程序的主类文件。<br>
通常Manifest文件的文件名为MANIFEST.MF。<br>
通常Manifest文件都与Java档案相关，其他的情况比较少见。<br>

manifest.json文件中对于field具体定义格式如下：<br>
{<br>
  "minecraft": {<br>
    "version": "1.18.2",<br>
    "modLoaders": [<br>
      {<br>
        "id": "forge-40.2.21",<br>
        "primary": true<br>
      }<br>
    ]<br>
  },<br>
  "manifestType": "minecraftModpack",<br>
  "manifestVersion": 1,<br>
  "name": "TFCH",<br>
  "version": "1.4.9",<br>
  "author": "",<br>
  "files": [<br>
    {<br>
      "projectID": xxxxxx,<br>
      "fileID": xxxxxxx,<br>
      "required": true<br>
    },<br>
    {}<br>
  ],<br>
  "overrides": "overrides"<br>
}<br>

### manifest文件规范
JAR档案文件在规定位置包含META-INF/MANIFEST.MF [6]。
在一个档案文件中，只能有一个Manifest文件，而且必须在规定的META-INF文件夹中。

由JDK1.0创建的Manifest文件内容如下：

Manifest-Version: 1.0
其中包含的所有条目均为名/值对。文件头的名和值由冒号分隔。
默认的Manifest文件显示它遵从Manifest资源配置文件规范1.0。
Manifest文件还可以包含该档案文件中所打包的其他文件的信息。
具体Manifest文件中记录的文件信息由该JAR文件的预期使用对象决定。
默认的Manifest文件并不包含其他文件的信息，因此只包含唯一一行关于该Manifest文件自身的数据。

## modlist.html文件说明
的对于filed和定义
