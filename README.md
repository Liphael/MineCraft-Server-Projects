# MC服务器项目总目录 & 指南文件
包含运行中/构思中的MC服务器项目。Containing ongoing/upcoming MineCraft server projects.
#### 声明 Statements
开发指南见下使用教程部分，结构、定义部分为文档收录结构分层使用。<br>
The development guide can be found in the tutorial section below, and the structure section is the hierarchical use of the document collection structure.<br>

本文档结构基于"Compass 0.1.0-alpha"撰写。<br>
the structure of this doc is following "Compass 0.1.0-alpha".<br><br>

## 结构 Structure
- **纯粹分类** **pure-classification**
  
  上级：我的世界<br>
  同级：任何我的世界服务器项目<br>
  下级：ImagEMappeR.org的我的世界服务器项目<br>

  Superior: MineCraft<br>
  Level: Any Minecraft server projects<br>
  Subordinate: ImagEMappeR.org's Minecraft Server projects<br><br>
  
- **模块属性** **modulization**
  
  前置：[Forge官方](https://files.minecraftforge.net/net/minecraftforge/forge/);[CurseForge官方](https://www.curseforge.com/);等。<br>
  同类：任意我的世界整合包、包组<br>
  附属：暂无<br>
  
  Prerequisite: [Forge Official](https://files.minecraftforge.net/net/minecraftforge/forge/);[CurseForge Official](https://www.curseforge.com/);<br>
  Homotype: Any MineCraft Integration Packages, or Package Groups<br>
  belongling: null(tentative)<br>

## 定义 Definition
ImagEMappeR.org的我的世界服务器项目总目录、指南文件<br>
Minecraft Server projects' directory and guide files, for ImagEMappeR.org

## 用途 Usage
ImagEMappeR.org的我的世界服务器项目总目录、指南文件，在使用教程部分规定本项目文件总的结构、开发模板，以便于不同开发人员基于统一规则的修改和自定义更新，以及为不同mod进行整合优化服务。<br>
ImagEMappeR.org原版权所有，以MIT.License为开源许可协议；您可以在[License文件夹](https://github.com/Liphael/MineCraft-Server-Projects/tree/main/License)中查看开源许可的所有内容。<br>

## 使用教程 Tutorial
### 立项 
#### 立项基本流程：
1. 在此目录下的[Projects]()文件夹目录下，建立一个**唯一的**仅属于该项目的子文件夹，文件夹将包含项目所有历史内容；以“server_”开头，加上服务器项目的正式或暂定名称，来命名。<br>
2. 在该子文件夹中，建立以[Semantic Versioning 2.0.0](https://semver.org/lang/zh-CN/)规则命名的发行(release)版本号子文件夹，对应每个发行版本的内容。<br>
3. 在该子文件夹中，建立名为**README.md**的markdown文件，文件内容为下述**项目基本结构**部分中的**项目总规划**所述部分。<br>
4. 在该子文件夹中，建立名为**PUSH_ADVICE.md**的markdown文件，文件内容为对**项目总规划**的修缮提议，内容格式无规则，自由记录想法。<br>
#### 其他注意事项：
* 开发人员对项目总规划的内容发生分歧时，若不能达成一致，应对分歧内容重新立项。<br><br>

### 项目基本结构 Basic projects structure
#### 项目总规划
项目总规划的内容暂定为下述几个部分，为选取整合用mod、资源包以及自编源码等提供目的性指南：<br>
注：游戏中未作修改的部分空置不写即可；<br>
1. 总描述部分：以相对简洁的文字描述服务器整合包游戏体验的特征，玩法风格等。
2. 宏观重制部分：(暂定)包括**地图生成**、**制作系统**、**魔法系统**、**交互系统**四个子部分。宏观重制中陈列的内容要求对游戏中原生的机制作出较大修改，否则可以简单列在体验优化部分中。
3. 体验优化部分：(暂定)包括**物品方块**、**行为机制**、**动画&插件**、**交互机制**四个子部分。此处列出的优化为主要面向客户端资源包的、可选的优化，或者对游戏内容本身改动较小的部分。<br><br>

#### 包管理结构
本部分规定各发行版本文件夹内，整合包的统一结构；便于开发人员修改和优化整合包源码。
(Null)

## 开源许可 License
[开源许可模板](https://github.com/Liphael/MineCraft-Server-Projects/blob/main/License/MIT-%E8%AE%B8%E5%8F%AF-%E7%AE%80%E4%B8%AD%E7%BF%BB%E8%AF%91.txt)<br>
本项目许可基于[MIT开源许可](https://opensource.org/license/mit/)撰写。<br>
The MIT License (MIT): https://opensource.org/license/mit/<br>
