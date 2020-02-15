function customMenu(node)
{
    var items = {
        createItem: {
            label: "Create",
            action: function (node) { return { createItem: this.create(node) }; }
        },
        renameItem: {
            label: "Rename",
            action: function (node) { return { renameItem: this.rename(node) }; }
        },
        deleteItem: {
            label: "Delete",
            action: function (node) { return { deleteItem: this.remove(node) }; },
            "separator_after": true
        },
        copyItem: {
            label: "Copy",
            action: function (node) { $(node).addClass("copy"); return { copyItem: this.copy(node) }; }
        },
        cutItem: {
            label: "Cut",
            action: function (node) { $(node).addClass("cut"); return { cutItem: this.cut(node) }; }
        },
        pasteItem: {
            label: "Paste",
            action: function (node) { $(node).addClass("paste"); return { pasteItem: this.paste(node) }; }
        }
    };

    if (node.type === 'level_1') {
        delete items.item2;
    } else if (node.type === 'level_2') {
        delete items.item1;
    }

    return items;
}
$(function() {
	$('#accordion').collapse({
	    toggle: false
	});
	//law_select_st start
	$( ".law_select_st" )
	  	.change(function() {
	    var data_st_str = $( ".law_select_st option:selected" ).val();
	    $( ".law_select_st option:selected" ).each(function() {
	    	if (data_st_str == "刑法") {
	      		$(".select_nd").css('display', 'block');
		    } else if (data_st_str == "毒品危害防制條例") {
		    	$(".select_nd").css('display', 'block');
		    } else {
		    	$(".select_nd").css('display', 'none');
		    }
	    });
  	})
  	.trigger( "change" );
  	//law_select_st end
  	//jstree_radiobox start
  	/*$(".jstree_radiobox").jstree({
  		types: {
	      default : {
	      	icon : "fa fa-folder text-warning font-18"}
	    },
	    plugins: ["checkbox","types"],
	    core: {
	        multiple: false
	    },
	    checkbox: {
	        three_state: false,
	        cascade: "none"
	    }
	});*/
	//jstree_radiobox end
	//jstree_click start
  	/*$(".jstree_click").jstree({
  		contextmenu : {
	        items : function(node) {
				var tmp = $.jstree.defaults.contextmenu.items();
				delete tmp.create.action;
				tmp.create.label = "New";
				tmp.create.submenu = {
					create_folder : {
						separator_after	: true,
						label			: "Folder",
						action			: function (data) {
							var inst = $.jstree.reference(data.reference),
								obj = inst.get_node(data.reference);
							inst.create_node(obj, { type : "default" }, "last", function (new_node) {
								setTimeout(function () { inst.edit(new_node); },0);
							});
						}
					},
					create_file : {
						label				: "File",
						action			: function (data) {
							var inst = $.jstree.reference(data.reference),
								obj = inst.get_node(data.reference);
							inst.create_node(obj, { type : "file" }, "last", function (new_node) {
								setTimeout(function () { inst.edit(new_node); },0);
							});
						}
					}
				};
				if(this.get_type(node) === "file") {
					delete tmp.create;
				}
				return tmp;
			}
	    },
	    plugins : ['contextmenu', 'types','checkbox'],
	    types: {
	      default : {
	      	icon : "fa fa-folder text-warning font-18"}
	    },
	    core: {
	        multiple: false
	    },
	    checkbox: {
	        three_state: false,
	        cascade: "none"
	    }
	});*/
	//jstree_click end
	var setting = {
		view: {
			addHoverDom: addHoverDom,
			removeHoverDom: removeHoverDom,
			selectedMulti: false
		},
		edit: {
			enable: true
		},
		data: {
			simpleData: {
				enable: true
			}
		},
		callback: {
			beforeDrag: beforeDrag,
			/*beforeEditName: beforeEditName,
			beforeRemove: beforeRemove,
			beforeRename: beforeRename,*/
			onRemove: onRemove,
			onRename: onRename
		},
		check: {
			enable: true
		}
	};

	var zNodes =[
		{ id:1, pId:0, name:"毒偵", open:true},
		{ id:11, pId:1, name:"毒品危害防制條例第10條第1項"},
		{ id:12, pId:1, name:"毒品危害防制條例第10條第2項"},
		{ id:13, pId:1, name:"毒品危害防制條例第11條第1項"},
		{ id:14, pId:1, name:"毒品危害防制條例第11條第2項"},
		{ id:2, pId:0, name:"酒駕", open:true},
		{ id:21, pId:2, name:"刑法第185條之3第1項"}
	];
	var log, className = "dark";
	function beforeDrag(treeId, treeNodes) {
		return false;
	}
	function onRemove(e, treeId, treeNode) {
		showLog("[ "+getTime()+" onRemove ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
	}
	function beforeRename(treeId, treeNode, newName) {
		className = (className === "dark" ? "":"dark");
		showLog("[ "+getTime()+" beforeRename ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
		if (newName.length == 0) {
			alert("节点名称不能为空.");
			var zTree = $.fn.zTree.getZTreeObj("tree12-1");
			setTimeout(function(){zTree.editName(treeNode)}, 10);
			return false;
		}
		return true;
	}
	function onRename(e, treeId, treeNode) {
		showLog("[ "+getTime()+" onRename ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
	}
	function showLog(str) {
		if (!log) log = $("#log");
		log.append("<li class='"+className+"'>"+str+"</li>");
		if(log.children("li").length > 8) {
			log.get(0).removeChild(log.children("li")[0]);
		}
	}
	function getTime() {
		var now= new Date(),
		h=now.getHours(),
		m=now.getMinutes(),
		s=now.getSeconds(),
		ms=now.getMilliseconds();
		return (h+":"+m+":"+s+ " " +ms);
	}

	var newCount = 1;
	function addHoverDom(treeId, treeNode) {
		var sObj = $("#" + treeNode.tId + "_span");
		if (treeNode.editNameFlag || $("#addBtn_"+treeNode.id).length>0) return;
		var addStr = "<span class='button add' id='addBtn_" + treeNode.id
			+ "' title='add node' onfocus='this.blur();'></span>";
		sObj.after(addStr);
		var btn = $("#addBtn_"+treeNode.id);
		if (btn) btn.bind("click", function(){
			var zTree = $.fn.zTree.getZTreeObj("tree12-1");
			zTree.addNodes(treeNode, {id:(100 + newCount), pId:treeNode.id, name:"new node" + (newCount++)});
			return false;
		});
	};
	function removeHoverDom(treeId, treeNode) {
		$("#addBtn_"+treeNode.id).unbind().remove();
	};
	function selectAll() {
		var zTree = $.fn.zTree.getZTreeObj("tree12-1");
		zTree.setting.edit.editNameSelectAll =  $("#selectAll").attr("checked");
	}
	function setEdit() {
		var zTree = $.fn.zTree.getZTreeObj("tree12-1"),
		remove = $("#remove").attr("checked"),
		rename = $("#rename").attr("checked"),
		removeTitle = $.trim($("#removeTitle").get(0).value),
		renameTitle = $.trim($("#renameTitle").get(0).value);
		zTree.setting.edit.showRemoveBtn = remove;
		zTree.setting.edit.showRenameBtn = rename;
		zTree.setting.edit.removeTitle = removeTitle;
		zTree.setting.edit.renameTitle = renameTitle;
		showCode(['setting.edit.showRemoveBtn = ' + remove, 'setting.edit.showRenameBtn = ' + rename,
			'setting.edit.removeTitle = "' + removeTitle +'"', 'setting.edit.renameTitle = "' + renameTitle + '"']);
	}
	$.fn.zTree.init($("#tree12-1"), setting, zNodes);
	$("#selectAll").bind("click", selectAll);
});
$(function() {
	var setting = {
		view: {
			addHoverDom: addHoverDom,
			removeHoverDom: removeHoverDom,
			selectedMulti: false
		},
		edit: {
			enable: true
		},
		data: {
			simpleData: {
				enable: true
			}
		},
		callback: {
			beforeDrag: beforeDrag,
			onRemove: onRemove,
			onRename: onRename
		},
		check: {
			enable: true
		}
	};
	var qNodes =[
		{ id:1, pId:0, name:"常用片語", open:true,
			children: [
				{ id:111, pId:1, name:"常用der", open:true,
					children: [
					{ id:1111, pId:1, name:"Hello"}
				]}
			]
		},
		{ id:2, pId:0, name:"只有一層", isParent:true},
		{ id:3, pId:0, name:"只有一層", isParent:true}
	];
	var log, className = "dark";
	function beforeDrag(treeId, treeNodes) {
		return false;
	}
	function onRemove(e, treeId, treeNode) {
		showLog("[ "+getTime()+" onRemove ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
	}
	function onRename(e, treeId, treeNode) {
		showLog("[ "+getTime()+" onRename ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
	}
	function showLog(str) {
		if (!log) log = $("#log");
		log.append("<li class='"+className+"'>"+str+"</li>");
		if(log.children("li").length > 8) {
			log.get(0).removeChild(log.children("li")[0]);
		}
	}
	function getTime() {
		var now= new Date(),
		h=now.getHours(),
		m=now.getMinutes(),
		s=now.getSeconds(),
		ms=now.getMilliseconds();
		return (h+":"+m+":"+s+ " " +ms);
	}

	var newCount = 1;
	function addHoverDom(treeId, treeNode) {
		var sObj = $("#" + treeNode.tId + "_span");
		if (treeNode.editNameFlag || $("#addBtn_"+treeNode.id).length>0) return;
		var addStr = "<span class='button add' id='addBtn_" + treeNode.id
			+ "' title='add node' onfocus='this.blur();'></span>";
		sObj.after(addStr);
		var btn = $("#addBtn_"+treeNode.id);
		if (btn) btn.bind("click", function(){
			var zTree2 = $.fn.zTree.getZTreeObj("tree-common");
			zTree2.addNodes(treeNode, {id:(100 + newCount), pId:treeNode.id, name:"new node" + (newCount++)});
			return false;
		});
	};
	function removeHoverDom(treeId, treeNode) {
		$("#addBtn_"+treeNode.id).unbind().remove();
	};
	function selectAll() {
		var zTree = $.fn.zTree.getZTreeObj("tree-common");
		zTree.setting.edit.editNameSelectAll =  $("#selectAll").attr("checked");
	}
	function setEdit() {
		var zTree = $.fn.zTree.getZTreeObj("tree-common"),
		remove = $("#remove").attr("checked"),
		rename = $("#rename").attr("checked"),
		removeTitle = $.trim($("#removeTitle").get(0).value),
		renameTitle = $.trim($("#renameTitle").get(0).value);
		zTree.setting.edit.showRemoveBtn = remove;
		zTree.setting.edit.showRenameBtn = rename;
		zTree.setting.edit.removeTitle = removeTitle;
		zTree.setting.edit.renameTitle = renameTitle;
		showCode(['setting.edit.showRemoveBtn = ' + remove, 'setting.edit.showRenameBtn = ' + rename,
			'setting.edit.removeTitle = "' + removeTitle +'"', 'setting.edit.renameTitle = "' + renameTitle + '"']);
	}
	$.fn.zTree.init($("#tree-common"), setting, qNodes);
	$("#selectAll").bind("click", selectAll);
});
$(function() {
	var setting = {
		view: {
			addHoverDom: addHoverDom,
			removeHoverDom: removeHoverDom,
			selectedMulti: false
		},
		edit: {
			enable: true
		},
		data: {
			simpleData: {
				enable: true
			}
		},
		callback: {
			beforeDrag: beforeDrag,
			onRemove: onRemove,
			onRename: onRename
		},
		check: {
			enable: true
		}
	};
	var xNodes =[ 
		{ id:1, pId:0, name:"通用", open:true},
		{ id:11, pId:1, name:"起訴書"},
		{ id:12, pId:1, name:"緩起訴處分書"},
		{ id:13, pId:1, name:"聲請簡易判決處刑書"},
		{ id:14, pId:1, name:"不起訴書(犯罪嫌疑不足)"},
		{ id:2, pId:0, name:"毒偵", isParent:true},
		{ id:3, pId:0, name:"酒駕", isParent:true}
	];
	var log, className = "dark";
	function beforeDrag(treeId, treeNodes) {
		return false;
	}
	function onRemove(e, treeId, treeNode) {
		showLog("[ "+getTime()+" onRemove ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
	}
	function onRename(e, treeId, treeNode) {
		showLog("[ "+getTime()+" onRename ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
	}
	function showLog(str) {
		if (!log) log = $("#log");
		log.append("<li class='"+className+"'>"+str+"</li>");
		if(log.children("li").length > 8) {
			log.get(0).removeChild(log.children("li")[0]);
		}
	}
	function getTime() {
		var now= new Date(),
		h=now.getHours(),
		m=now.getMinutes(),
		s=now.getSeconds(),
		ms=now.getMilliseconds();
		return (h+":"+m+":"+s+ " " +ms);
	}

	var newCount = 1;
	function addHoverDom(treeId, treeNode) {
		var sObj = $("#" + treeNode.tId + "_span");
		if (treeNode.editNameFlag || $("#addBtn_"+treeNode.id).length>0) return;
		var addStr = "<span class='button add' id='addBtn_" + treeNode.id
			+ "' title='add node' onfocus='this.blur();'></span>";
		sObj.after(addStr);
		var btn = $("#addBtn_"+treeNode.id);
		if (btn) btn.bind("click", function(){
			var zTree2 = $.fn.zTree.getZTreeObj("tree12-2");
			zTree2.addNodes(treeNode, {id:(100 + newCount), pId:treeNode.id, name:"new node" + (newCount++)});
			return false;
		});
	};
	function removeHoverDom(treeId, treeNode) {
		$("#addBtn_"+treeNode.id).unbind().remove();
	};
	function selectAll() {
		var zTree = $.fn.zTree.getZTreeObj("tree12-2");
		zTree.setting.edit.editNameSelectAll =  $("#selectAll").attr("checked");
	}
	function setEdit() {
		var zTree = $.fn.zTree.getZTreeObj("tree12-2"),
		remove = $("#remove").attr("checked"),
		rename = $("#rename").attr("checked"),
		removeTitle = $.trim($("#removeTitle").get(0).value),
		renameTitle = $.trim($("#renameTitle").get(0).value);
		zTree.setting.edit.showRemoveBtn = remove;
		zTree.setting.edit.showRenameBtn = rename;
		zTree.setting.edit.removeTitle = removeTitle;
		zTree.setting.edit.renameTitle = renameTitle;
		showCode(['setting.edit.showRemoveBtn = ' + remove, 'setting.edit.showRenameBtn = ' + rename,
			'setting.edit.removeTitle = "' + removeTitle +'"', 'setting.edit.renameTitle = "' + renameTitle + '"']);
	}
	$.fn.zTree.init($("#tree12-2"), setting, xNodes);
	$("#selectAll").bind("click", selectAll);
});
$(function() {
	var setting = {
		view: {
			addHoverDom: addHoverDom,
			removeHoverDom: removeHoverDom,
			selectedMulti: false
		},
		edit: {
			enable: true
		},
		data: {
			simpleData: {
				enable: true
			}
		},
		callback: {
			beforeDrag: beforeDrag,
			onRemove: onRemove,
			onRename: onRename
		},
		check: {
			enable: true
		}
	};
	var cNodes =[
		{ name:"人證", open:true,
			children: [
				{ name:"調查／詢問筆錄", open:true,
					children: [
						{ name:"坦承時間點", open:true,
							children: [
								{ name:"偵查", open:true,
									children: [
										{ name:"被告於偵查時坦承事項"},
										{ name:"被告於偵查時坦承事項"}
									]
								},
								{ name:"警詢", open:true,
									children: [
										{ name:"被告於偵查時坦承事項"},
										{ name:"被告於偵查時坦承事項"}
									]
								}
							]
						}
					]
				}
			]
		},
		{ name:"物證", open:true,
			children: [
				{ name:"調查／詢問筆錄", open:true,
					children: [
						{ name:"坦承時間點", open:true,
							children: [
								{ name:"偵查", open:true,
									children: [
										{ name:"被告於偵查時坦承事項"},
										{ name:"被告於偵查時坦承事項"}
									]
								},
								{ name:"警詢", open:true,
									children: [
										{ name:"被告於偵查時坦承事項"},
										{ name:"被告於偵查時坦承事項"}
									]
								}
							]
						}
					]
				}
			]
		},
		{ name:"書證", open:true,
			children: [
				{ name:"調查／詢問筆錄", open:true,
					children: [
						{ name:"坦承時間點", open:true,
							children: [
								{ name:"偵查", open:true,
									children: [
										{ name:"被告於偵查時坦承事項"},
										{ name:"被告於偵查時坦承事項"}
									]
								},
								{ name:"警詢", open:true,
									children: [
										{ name:"被告於偵查時坦承事項"},
										{ name:"被告於偵查時坦承事項"}
									]
								}
							]
						}
					]
				}
			]
		}
	];
	var log, className = "dark";
	function beforeDrag(treeId, treeNodes) {
		return false;
	}
	function onRemove(e, treeId, treeNode) {
		showLog("[ "+getTime()+" onRemove ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
	}
	function onRename(e, treeId, treeNode) {
		showLog("[ "+getTime()+" onRename ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
	}
	function showLog(str) {
		if (!log) log = $("#log");
		log.append("<li class='"+className+"'>"+str+"</li>");
		if(log.children("li").length > 8) {
			log.get(0).removeChild(log.children("li")[0]);
		}
	}
	function getTime() {
		var now= new Date(),
		h=now.getHours(),
		m=now.getMinutes(),
		s=now.getSeconds(),
		ms=now.getMilliseconds();
		return (h+":"+m+":"+s+ " " +ms);
	}

	var newCount = 1;
	function addHoverDom(treeId, treeNode) {
		var sObj = $("#" + treeNode.tId + "_span");
		if (treeNode.editNameFlag || $("#addBtn_"+treeNode.id).length>0) return;
		var addStr = "<span class='button add' id='addBtn_" + treeNode.id
			+ "' title='add node' onfocus='this.blur();'></span>";
		sObj.after(addStr);
		var btn = $("#addBtn_"+treeNode.id);
		if (btn) btn.bind("click", function(){
			var zTree2 = $.fn.zTree.getZTreeObj("tree11-1");
			zTree2.addNodes(treeNode, {id:(100 + newCount), pId:treeNode.id, name:"new node" + (newCount++)});
			return false;
		});
	};
	function removeHoverDom(treeId, treeNode) {
		$("#addBtn_"+treeNode.id).unbind().remove();
	};
	function selectAll() {
		var zTree = $.fn.zTree.getZTreeObj("tree11-1");
		zTree.setting.edit.editNameSelectAll =  $("#selectAll").attr("checked");
	}
	function setEdit() {
		var zTree = $.fn.zTree.getZTreeObj("tree11-1"),
		remove = $("#remove").attr("checked"),
		rename = $("#rename").attr("checked"),
		removeTitle = $.trim($("#removeTitle").get(0).value),
		renameTitle = $.trim($("#renameTitle").get(0).value);
		zTree.setting.edit.showRemoveBtn = remove;
		zTree.setting.edit.showRenameBtn = rename;
		zTree.setting.edit.removeTitle = removeTitle;
		zTree.setting.edit.renameTitle = renameTitle;
		showCode(['setting.edit.showRemoveBtn = ' + remove, 'setting.edit.showRenameBtn = ' + rename,
			'setting.edit.removeTitle = "' + removeTitle +'"', 'setting.edit.renameTitle = "' + renameTitle + '"']);
	}
	$.fn.zTree.init($("#tree11-1"), setting, cNodes);
	$("#selectAll").bind("click", selectAll);
});
$(function() {
	var setting = {
		view: {
			addHoverDom: addHoverDom,
			removeHoverDom: removeHoverDom,
			selectedMulti: false
		},
		edit: {
			enable: true
		},
		data: {
			simpleData: {
				enable: true
			}
		},
		callback: {
			beforeDrag: beforeDrag,
			onRemove: onRemove,
			onRename: onRename
		},
		check: {
			enable: true
		}
	};
	var vNodes =[
		{ name:"人證", open:true,
			children: [
				{ name:"調查／詢問筆錄", open:true,
					children: [
						{ name:"坦承時間點", open:true,
							children: [
								{ name:"偵查", open:true,
									children: [
										{ name:"被告於偵查時坦承事項"},
										{ name:"被告於偵查時坦承事項"}
									]
								},
								{ name:"警詢", open:true,
									children: [
										{ name:"被告於偵查時坦承事項"},
										{ name:"被告於偵查時坦承事項"}
									]
								}
							]
						}
					]
				}
			]
		}
	];
	var log, className = "dark";
	function beforeDrag(treeId, treeNodes) {
		return false;
	}
	function onRemove(e, treeId, treeNode) {
		showLog("[ "+getTime()+" onRemove ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
	}
	function onRename(e, treeId, treeNode) {
		showLog("[ "+getTime()+" onRename ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
	}
	function showLog(str) {
		if (!log) log = $("#log");
		log.append("<li class='"+className+"'>"+str+"</li>");
		if(log.children("li").length > 8) {
			log.get(0).removeChild(log.children("li")[0]);
		}
	}
	function getTime() {
		var now= new Date(),
		h=now.getHours(),
		m=now.getMinutes(),
		s=now.getSeconds(),
		ms=now.getMilliseconds();
		return (h+":"+m+":"+s+ " " +ms);
	}

	var newCount = 1;
	function addHoverDom(treeId, treeNode) {
		var sObj = $("#" + treeNode.tId + "_span");
		if (treeNode.editNameFlag || $("#addBtn_"+treeNode.id).length>0) return;
		var addStr = "<span class='button add' id='addBtn_" + treeNode.id
			+ "' title='add node' onfocus='this.blur();'></span>";
		sObj.after(addStr);
		var btn = $("#addBtn_"+treeNode.id);
		if (btn) btn.bind("click", function(){
			var zTree2 = $.fn.zTree.getZTreeObj("tree11-2");
			zTree2.addNodes(treeNode, {id:(100 + newCount), pId:treeNode.id, name:"new node" + (newCount++)});
			return false;
		});
	};
	function removeHoverDom(treeId, treeNode) {
		$("#addBtn_"+treeNode.id).unbind().remove();
	};
	function selectAll() {
		var zTree = $.fn.zTree.getZTreeObj("tree11-2");
		zTree.setting.edit.editNameSelectAll =  $("#selectAll").attr("checked");
	}
	function setEdit() {
		var zTree = $.fn.zTree.getZTreeObj("tree11-2"),
		remove = $("#remove").attr("checked"),
		rename = $("#rename").attr("checked"),
		removeTitle = $.trim($("#removeTitle").get(0).value),
		renameTitle = $.trim($("#renameTitle").get(0).value);
		zTree.setting.edit.showRemoveBtn = remove;
		zTree.setting.edit.showRenameBtn = rename;
		zTree.setting.edit.removeTitle = removeTitle;
		zTree.setting.edit.renameTitle = renameTitle;
		showCode(['setting.edit.showRemoveBtn = ' + remove, 'setting.edit.showRenameBtn = ' + rename,
			'setting.edit.removeTitle = "' + removeTitle +'"', 'setting.edit.renameTitle = "' + renameTitle + '"']);
	}
	$.fn.zTree.init($("#tree11-2"), setting, vNodes);
	$("#selectAll").bind("click", selectAll);
});
$(function() {
	var setting = {
		view: {
			addHoverDom: addHoverDom,
			removeHoverDom: removeHoverDom,
			selectedMulti: false
		},
		edit: {
			enable: true
		},
		data: {
			simpleData: {
				enable: true
			}
		},
		callback: {
			beforeDrag: beforeDrag,
			onRemove: onRemove,
			onRename: onRename
		},
		check: {
			enable: true
		}
	};
	var bNodes =[
		{ name:"物證", open:true,
			children: [
				{ name:"調查／詢問筆錄", open:true,
					children: [
						{ name:"坦承時間點", open:true,
							children: [
								{ name:"偵查", open:true,
									children: [
										{ name:"被告於偵查時坦承事項"},
										{ name:"被告於偵查時坦承事項"}
									]
								},
								{ name:"警詢", open:true,
									children: [
										{ name:"被告於偵查時坦承事項"},
										{ name:"被告於偵查時坦承事項"}
									]
								}
							]
						}
					]
				}
			]
		}
	];
	var log, className = "dark";
	function beforeDrag(treeId, treeNodes) {
		return false;
	}
	function onRemove(e, treeId, treeNode) {
		showLog("[ "+getTime()+" onRemove ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
	}
	function onRename(e, treeId, treeNode) {
		showLog("[ "+getTime()+" onRename ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
	}
	function showLog(str) {
		if (!log) log = $("#log");
		log.append("<li class='"+className+"'>"+str+"</li>");
		if(log.children("li").length > 8) {
			log.get(0).removeChild(log.children("li")[0]);
		}
	}
	function getTime() {
		var now= new Date(),
		h=now.getHours(),
		m=now.getMinutes(),
		s=now.getSeconds(),
		ms=now.getMilliseconds();
		return (h+":"+m+":"+s+ " " +ms);
	}

	var newCount = 1;
	function addHoverDom(treeId, treeNode) {
		var sObj = $("#" + treeNode.tId + "_span");
		if (treeNode.editNameFlag || $("#addBtn_"+treeNode.id).length>0) return;
		var addStr = "<span class='button add' id='addBtn_" + treeNode.id
			+ "' title='add node' onfocus='this.blur();'></span>";
		sObj.after(addStr);
		var btn = $("#addBtn_"+treeNode.id);
		if (btn) btn.bind("click", function(){
			var zTree2 = $.fn.zTree.getZTreeObj("tree11-3");
			zTree2.addNodes(treeNode, {id:(100 + newCount), pId:treeNode.id, name:"new node" + (newCount++)});
			return false;
		});
	};
	function removeHoverDom(treeId, treeNode) {
		$("#addBtn_"+treeNode.id).unbind().remove();
	};
	function selectAll() {
		var zTree = $.fn.zTree.getZTreeObj("tree11-3");
		zTree.setting.edit.editNameSelectAll =  $("#selectAll").attr("checked");
	}
	function setEdit() {
		var zTree = $.fn.zTree.getZTreeObj("tree11-3"),
		remove = $("#remove").attr("checked"),
		rename = $("#rename").attr("checked"),
		removeTitle = $.trim($("#removeTitle").get(0).value),
		renameTitle = $.trim($("#renameTitle").get(0).value);
		zTree.setting.edit.showRemoveBtn = remove;
		zTree.setting.edit.showRenameBtn = rename;
		zTree.setting.edit.removeTitle = removeTitle;
		zTree.setting.edit.renameTitle = renameTitle;
		showCode(['setting.edit.showRemoveBtn = ' + remove, 'setting.edit.showRenameBtn = ' + rename,
			'setting.edit.removeTitle = "' + removeTitle +'"', 'setting.edit.renameTitle = "' + renameTitle + '"']);
	}
	$.fn.zTree.init($("#tree11-3"), setting, bNodes);
	$("#selectAll").bind("click", selectAll);
});
$(function() {
	var setting = {
		view: {
			addHoverDom: addHoverDom,
			removeHoverDom: removeHoverDom,
			selectedMulti: false
		},
		edit: {
			enable: true
		},
		data: {
			simpleData: {
				enable: true
			}
		},
		callback: {
			beforeDrag: beforeDrag,
			onRemove: onRemove,
			onRename: onRename
		},
		check: {
			enable: true
		}
	};
	var nNodes =[
		{ name:"書證", open:true,
			children: [
				{ name:"調查／詢問筆錄", open:true,
					children: [
						{ name:"坦承時間點", open:true,
							children: [
								{ name:"偵查", open:true,
									children: [
										{ name:"被告於偵查時坦承事項"},
										{ name:"被告於偵查時坦承事項"}
									]
								},
								{ name:"警詢", open:true,
									children: [
										{ name:"被告於偵查時坦承事項"},
										{ name:"被告於偵查時坦承事項"}
									]
								}
							]
						}
					]
				}
			]
		}
	];
	var log, className = "dark";
	function beforeDrag(treeId, treeNodes) {
		return false;
	}
	function onRemove(e, treeId, treeNode) {
		showLog("[ "+getTime()+" onRemove ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
	}
	function onRename(e, treeId, treeNode) {
		showLog("[ "+getTime()+" onRename ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
	}
	function showLog(str) {
		if (!log) log = $("#log");
		log.append("<li class='"+className+"'>"+str+"</li>");
		if(log.children("li").length > 8) {
			log.get(0).removeChild(log.children("li")[0]);
		}
	}
	function getTime() {
		var now= new Date(),
		h=now.getHours(),
		m=now.getMinutes(),
		s=now.getSeconds(),
		ms=now.getMilliseconds();
		return (h+":"+m+":"+s+ " " +ms);
	}

	var newCount = 1;
	function addHoverDom(treeId, treeNode) {
		var sObj = $("#" + treeNode.tId + "_span");
		if (treeNode.editNameFlag || $("#addBtn_"+treeNode.id).length>0) return;
		var addStr = "<span class='button add' id='addBtn_" + treeNode.id
			+ "' title='add node' onfocus='this.blur();'></span>";
		sObj.after(addStr);
		var btn = $("#addBtn_"+treeNode.id);
		if (btn) btn.bind("click", function(){
			var zTree2 = $.fn.zTree.getZTreeObj("tree11-4");
			zTree2.addNodes(treeNode, {id:(100 + newCount), pId:treeNode.id, name:"new node" + (newCount++)});
			return false;
		});
	};
	function removeHoverDom(treeId, treeNode) {
		$("#addBtn_"+treeNode.id).unbind().remove();
	};
	function selectAll() {
		var zTree = $.fn.zTree.getZTreeObj("tree11-4");
		zTree.setting.edit.editNameSelectAll =  $("#selectAll").attr("checked");
	}
	function setEdit() {
		var zTree = $.fn.zTree.getZTreeObj("tree11-4"),
		remove = $("#remove").attr("checked"),
		rename = $("#rename").attr("checked"),
		removeTitle = $.trim($("#removeTitle").get(0).value),
		renameTitle = $.trim($("#renameTitle").get(0).value);
		zTree.setting.edit.showRemoveBtn = remove;
		zTree.setting.edit.showRenameBtn = rename;
		zTree.setting.edit.removeTitle = removeTitle;
		zTree.setting.edit.renameTitle = renameTitle;
		showCode(['setting.edit.showRemoveBtn = ' + remove, 'setting.edit.showRenameBtn = ' + rename,
			'setting.edit.removeTitle = "' + removeTitle +'"', 'setting.edit.renameTitle = "' + renameTitle + '"']);
	}
	$.fn.zTree.init($("#tree11-4"), setting, nNodes);
	$("#selectAll").bind("click", selectAll);
});

//option:selected
//fliter

function shortString(selector) {
  const elements = document.querySelectorAll(selector);
  const tail = '...';
  if (elements && elements.length) {
    for (const element of elements) {
      let text = element.innerText;
      if (element.hasAttribute('data-limit')) {
        if (text.length > element.dataset.limit) {
          element.innerText = `${text.substring(0, element.dataset.limit - tail.length).trim()}${tail}`;
        }
      } else {
        throw Error('Cannot find attribute \'data-limit\'');
      }
    }
  }
}

window.onload = function() {
  shortString('.short');
};