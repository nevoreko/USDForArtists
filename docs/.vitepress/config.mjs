import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	base: "/USDForArtists/",
	title: "USD For Artists",
	description: "Boost your understanding of Pixar's USD",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: "/images/USDLogo.png",
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Examples", link: "/markdown-examples" },
		],

		sidebar: [
			{
				text: "Examples",
				items: [
					{ text: "Markdown Examples", link: "/markdown-examples" },
					{ text: "Runtime API Examples", link: "/api-examples" },
				],
			},
		],
		search: {
			provider: "local",
		},

		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/nevoreko/USDForArtists",
			},
		],
	},
});
