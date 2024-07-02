import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "USD For Artists",
	description: "Increase your understanding of Pixar's USD",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "docs/" },
			{ text: "Examples", link: "docs/markdown-examples.md" },
		],

		sidebar: [
			{
				text: "Examples",
				items: [
					{
						text: "Markdown Examples",
						link: "docs/markdown-examples.md",
					},
					{ text: "Runtime API Examples", link: "docs/api-examples" },
				],
			},
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/vuejs/vitepress" },
		],
	},
});
