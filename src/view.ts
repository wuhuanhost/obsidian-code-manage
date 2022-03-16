/*
 * @Author: Dreamer
 * @Site: https://www.geekfanfan.com
 * @Date: 2022-03-16 09:44:10
 * @Email: wuhuanhost@163.com
 * @LastEditors: Dreamer
 * @LastEditTime: 2022-03-16 11:38:35
 */
import { ItemView, WorkspaceLeaf, Menu, Notice } from "obsidian";
import CodeManagePlugin from "../main";
export const VIEW_TYPE_EXAMPLE = "example-view";

export class ExampleView extends ItemView {
	plugin: CodeManagePlugin;
	constructor(leaf: WorkspaceLeaf, plugin: CodeManagePlugin) {
		super(leaf);
		this.plugin = plugin;
	}

	getViewType() {
		return VIEW_TYPE_EXAMPLE;
	}

	getDisplayText() {
		return "Example view";
	}

	async onOpen() {
		const container = this.containerEl.children[1];
		// container.empty();

		container.createEl("h4", { text: "Example view" });
	}

	async onClose() {
		// Nothing to clean up.
	}

	onMoreOptionsMenu(menu: Menu) {
		menu.addItem((item) =>
			item
				.setIcon("pin")
				.setTitle("Pin")
				.onClick(() => new Notice("点击了pin按钮"))
		)
			.addSeparator()
			.addItem((item) =>
				item
					.setIcon("image-file")
					.setTitle("Copy screenshot")
					.onClick(() => new Notice("点击了保存图片的按钮"))
			)
			.addSeparator()
			.addItem((item) =>
				item
					.setIcon("image-markdown")
					.setTitle("打开markdown")
					.onClick(() => {
						new Notice("点击了打开markdown");
						this.plugin.setMarkdownView(this.leaf);
					})
			);
		menu.showAtPosition({ x: 0, y: 0 });
	}
}
