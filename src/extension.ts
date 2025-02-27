import * as vscode from 'vscode';
import { sidebarInit } from './sidebar/sidebarInit';
import { sensitiveWordDetectionInit } from './sensitiveWords/CheckForSensitiveWords';
import { modifyVsCodeUI } from './ModifyVsCodeUi';

export function activate(context: vscode.ExtensionContext) {
	// 初始化侧边栏
	sidebarInit(context);
	// 初始化敏感词检测功能
	sensitiveWordDetectionInit(context);
	// 修改VSCodeUI
	modifyVsCodeUI(context);
}

export function deactivate() { }
