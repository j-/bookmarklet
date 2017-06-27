[Bookmarklet][site]
===================

[![Screenshot](screenshot.png)][site]

Create JS bookmarklets

[Example bookmarklet](https://skeoh.com/bookmarklet/?title=Uppercase%20page%20contents&source=function%20walk%20(node%2C%20callback)%20%7B%0A%20%20%20%20callback(node)%3B%0A%20%20%20%20node%20%3D%20node.firstChild%3B%0A%20%20%20%20while%20(node)%20%7B%0A%20%20%20%20%20%20%20%20walk(node%2C%20callback)%3B%0A%20%20%20%20%20%20%20%20node%20%3D%20node.nextSibling%3B%0A%20%20%20%20%7D%0A%7D%0A%0Awalk(document.body%2C%20function%20(node)%20%7B%0A%20%20%20%20if%20(node.nodeType%20%3D%3D%3D%203)%20node.data%20%3D%20node.data.toUpperCase()%3B%0A%7D)%3B)

[site]: http://skeoh.com/bookmarklet/
