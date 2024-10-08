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

manifest.json文件中对于field具体定义详见[示例文件](https://github.com/Liphael/MineCraft-Server-Projects/blob/main/Projects/server_temp/0.1.0-beta/1-serverpack/1.20.1_forge47.3.0/manifest.json)内容。<br>
**文件内容注解：**<br>
- "minecraft"：本体相关信息；<br>
  "version"：版本号<br>
  "modLoaders"：MOD加载器，子项例如"id"表示版本，"primary"表示是否主要<br>
- "manidestType"：manifest类型；<br>
  本规范中服务端包填入"minecraftServerpack"，客户端包填入"minecraftClientpack"。<br>
- "manifestVersion"：manifest版本号；<br>
- "name"：整合包名称；<br>
- "Version"：整合包版本号；<br>
  由于项目对应整合包开发，此处直接使用**项目版本号**即可。<br>
- "author"：整合包作者；<br>
- "overrides"：覆写文件夹名称；<br>
- "files"：mod文件信息；<br>
  "projectID"：示例为curseforge上的项目ID；<br>
  "fileID"：示例为curseforge上项目的文件ID；<br>
  "required"：标明该项目是否必需<br>

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
