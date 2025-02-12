import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	base: "/USDForArtists/",
	title: "USD For Artists",
	description: "Boost your understanding of Open USD",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: "/images/USDLogo.png",
		nav: [
			{ text: "Home", link: "/" },
			{ text: "About", link: "/nav/about" },
		],

		sidebar: [
			{
				text: "Introduction",
				items: [
					{
						text: "What?",
						link: "/wiki/introduction/what",
					},
					{
						text: "Why?",
						link: "/wiki/introduction/why",
					},
				],
			},
			{
				text: "Core Concepts",
				items: [
					{
						text: "Stage and Primitives",
						link: "/wiki/coreConcepts/stagePrimitiveAndPrimvars",
					},
					{
						text: "Properties and Primvars",
						link: "/wiki/coreConcepts/stagePrimitiveAndPrimvars",
					},
					{
						text: "Layers and Composition",
						link: "/wiki/coreConcepts/stagePrimitiveAndPrimvars",
					},
				],
			},
			{
				text: "Artist Workflows",
				items: [
					{
						text: "Placeholder",
						link: "",
					},
				],
			},
			{
				text: "Examples & Tutorials",
				items: [
					{
						text: "Placeholder",
						link: "",
					},
				],
			},
			{
				text: "Useful Links & References",
				link: "/wiki/usefulLinksAndReference",
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
