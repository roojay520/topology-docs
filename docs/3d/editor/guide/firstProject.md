在本章内，您可以了解到如何创建并运行一个项目，以及一些简单的场景操作。
## 新项目
进入编辑器，系统会自动创建一个空白项目。

项目会默认创建一个场景。场景中自动包含下列元素：

- 旋转相机和漫游相机。您可以在右侧属性栏 - 场景 - 相机中切换相机类型。
- 辅助水平地面和网格。地面的中心点坐标为(0, 0, 0)，默认一个网格代表一米。您可以在右侧属性栏 - 场景 - 单位中修改当前场景的单位和单位值。
- 半球光，即环境光。

其中旋转相机、漫游相机、辅助地面和网格不会在左侧资源栏- 结构中显示。
## 创建模型
编辑器支持拖拽生成模型。

系统默认提供了一些基础模型，您可以在左侧资源栏 - 模型 - 基础模型中，鼠标左键按住立方体的图片，拖拽至画布上方松开鼠标，在鼠标和地面相交的地方就会生成一个1 * 1 * 1的立方体模型。
## 编辑模型
选中刚生成的立方体，会出现一个带有三个箭头和三个平面的位置操作器。其中，红色箭头方向指向X轴正方向，蓝色箭头指向Z轴正方向，绿色箭头指向Y轴正方向，红色平面代表YZ平面，蓝色平面代表XY平面，绿色平面代表XZ平面。拖拽箭头可以让立方体在对应轴上移动，拖拽平面可以让立法体在对应平面上移动。
:::danger
操作器的坐标仅表示模型的相对坐标，不表示世界坐标。如果模型被旋转，操作器的坐标方向与世界坐标并不一致。
:::
拖拽操作器改变立方体位置时，右侧属性栏 - 位置属性中对应的值会同步改变。同样的，您可以直接修改右侧属性栏中的位置属性值，立方体的位置也会发生改变。
## 创建多个场景
现在我们的项目中只有一个场景，它有两个元素：一个立方体和默认灯光。但是随着我们不断的拖入新的模型，尤其是那些复杂的模型，会让场景变得很卡顿（您可以在右下角看到当前场景的刷新率）。这时，如果我们将一个复杂场景分解为几个简单场景——例如室内场景和室外场景，或者一个楼房场景和各个楼层的场景——这样可以大大减少单个场景的模型数量，提高性能。

每个新项目会自动创建一个场景，名称默认为“新建场景”。而创建多个场景的方法也很简单，鼠标移至上方工具栏 - 场景按钮，在下拉列表中点击添加场景按钮，在弹窗中输入场景名称，点击确定，即可创建并自动切换到新场景。

如果您想返回第一个场景，只需要在场景下拉列表中点击第一个场景选项，就可以切换到第一个场景。

如果您想删除一个场景，可以在场景下拉列表中，点击对应场景选项后面的删除按钮。
## 创建视角
如果您希望将当前观察场景的视角保存下来，并且可以随意切换，那么您就需要用到视角功能。

您可以点击工具栏 - 视角 - 保存视角按钮，在弹窗中输入该视角的名称，点击确定，系统就会记录下当前的相机视角。

当您选择视角下拉选项中的任一视角时，系统会自动将相机移至对应视角，如果选择的视角不在当前场景内，系统也会自动切换场景。

您也可以点击视角选项后的删除按钮，来删除您保存的视角。初始视角是系统默认的，无法删除。
## 运行项目
如果您想查看项目的实际展示效果，点击右上角 - 运行按钮就可以进入运行状态。

可以看到，运行状态下不会显示辅助地面和网格，项目会进入纯展示状态。

运行状态下，会默认全屏显示。点击右上角退出全屏按钮可退出全屏状态。

点击右上角退出运行按钮，可返回编辑状态。
:::danger
在运行状态下对场景所作的任何修改都不会被保存。
:::
## 保存项目
现在我们已经有了一个很简单的项目，我们可以选择把它作为一个JSON文件保存在本地。

点击工具栏 - 项目 - 下载项目JSON文件，稍候浏览器就会自动把该文件下载到您的本地磁盘中。

您也可以通过工具栏 - 项目 - 打开项目JSON文件，来打开一个本地的项目文件。
## 灯光
场景会默认自带一个半球光，即环境光。您会看到这个立方体顶部呈现白色，侧面呈现灰色，底部呈现黑色。这是因为场景中的半球光是从上往下照射的，并且颜色是白色。当我们调整半球光的照射方向以及颜色时，立方体的颜色也会跟着发生变化。

当然，您也可以自由的创建其他类型的灯光。在左侧资源栏 - 模型 - 基础灯光中我们还提供了聚光灯、点光源以及平行光。它们的区别大致如下：

- 聚光灯：灯光以所在位置为起点，朝一个指定的方向照亮一定范围内的扇形区域。模型距灯光越远，灯光的强度越弱。类似手电筒。
- 点光源：灯光以所在位置为中心，照亮四周一定范围内的区域。模型距灯光越远，灯光的强度越弱。类似白炽灯泡。
- 平行光：灯光从一个很远的地方朝一个方向无限照射，被照射的物体朝向灯光的一面被照亮。类似太阳光。
- 半球光：一般用作场景的环境光，和平行光类似。

和创建模型的方法一样，您可以从左侧资源栏 - 模型 - 基础灯光中拖拽灯光至画布上松开鼠标，即可生成一个灯光。灯光和模型一样也可在右侧属性栏中进行修改。
## 结语
现在，您只需准备好模型，通过简单的拖拽及属性设置，就已经可以制作一个纯静态场景了。但是在实际应用中，我们想实现的功能远不止如此，例如用户交互、设置动画、数据实时显示等等。在后面，我们会与您一起通过一些简单的案例来介绍如何实现这些功能。
