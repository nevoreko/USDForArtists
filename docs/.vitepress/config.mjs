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
			{ text: "About", link: "about.md" },
			{ text: "Markdown Examples", link: "/markdown-examples" },
		],

		sidebar: [
			{
				text: "Introduction",
				items: [
					{
						text: "What is USD?",
						link: "/wiki/introduction/whatIsUSD.md",
					},
					{
						text: "Who is it for?",
						link: "/wiki/introduction/whoIsItFor.md",
					},
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
