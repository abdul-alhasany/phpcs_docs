import fs from 'node:fs';
import path from 'node:path';
import container from 'markdown-it-container';
 
const getChildrenRules = (directoryName) => {
	const rules = fs.readdirSync(path.resolve(__dirname, `../rules/${directoryName}`));
	const items = [];
	rules.forEach((rule) => {
		const ruleName = rule.replace('.md', '');
		items.push({
			text: ruleName,
			link: `/rules/${directoryName}/${ruleName}`,
		});
	});
	return items;
};

const getRules = () => {
	const rulesFolderContent = fs.readdirSync(path.resolve(__dirname, '../rules'));

	const items = [];
	rulesFolderContent.forEach((item) => {
		// Process directories only
		if (!fs.lstatSync(path.resolve(__dirname, `../rules/${item}`)).isDirectory()) {
			return;
		}

		items.push({
			text: item,
			link: `/rules/${item}`,
			items: getChildrenRules(item),
		});
	});
	return items;
};

const createExampleContainer = function (klass, defaultTitle, md) {
	return [
		container,
		klass,
		{
			render(tokens, index) {
				const token = tokens[index];
				const info = token.info
					.trim()
					.slice(klass.length)
					.trim();
				if (token.nesting === 1) {
					const title = md.renderInline(info || defaultTitle);
					return `<div class="${klass} custom-block"><p class="custom-block-title">${title}</p>\n`;
				}
				return '</div>\n';
			},
		},
	];
};

const getSidebarData = () => {
	return [
		{
			text: 'Getting started',
			collapsible: true,
			items: [
				{
					text: 'Introduction',
					link: '/introduction',
				},
				{
					text: 'Requirements',
					link: '/requirements',
				},
				{
					text: 'Installation',
					link: '/installation',
				},
				{
					text: 'Usage',
					link: '/usage',
				},
				{
					text: 'Advanced Usage',
					link: '/advanced-usage',
				},
				{
					text: 'Reporting',
					link: '/reporting',
				},
				{
					text: 'Configuring Options',
					link: '/configuring-options',
				},
				{
					text: 'Fixing Errors Automatically',
					link: '/fixing-errors-automatically',
				},
				{
					text: 'FAQ',
					link: '/faq',
				},

			],
		},
		{
			text: 'Standards creators',
			collapsible: true,
			collapsed: true,
			items: [
				{
					text: 'Annotated Ruleset',
					link: '/annotated-ruleset',
				},

			],
		},
		{
			text: 'Sniff Developers',
			collapsible: true,
			collapsed: true,
			items: [
				{
					text: 'Coding Standard Tutorial',
					link: '/coding-standard-tutorial',
				},
				{
					text: 'Version 3.0 Upgrade Guide',
					link: '/version-3.0-upgrade-guide',
				},
				{
					text: 'Version 1.3.0 Upgrade Guide',
					link: '/version-1.3.0-upgrade-guide',
				},
			],
		},
		{
			text: 'Rules',
			collapsible: true,
			collapsed: true,
			items: getRules(),
		},
	];
};

export default {
	title: 'Documentation',
	description: 'Documentation for PHPSniffer',
	base: '/phpcs/docs/',
	themeConfig: {
		siteTitle: 'PHPSniffer',
		outline: 'deep',
		lastUpdated: true,
		cleanUrls: 'without-subfolders',
		editLink: {
			pattern: 'https://github.com/kalimah-apps/phpcs_docs/edit/master/docs/:path',
			text: 'Edit this page on GitHub',
		},
		socialLinks: [
			{
				icon: 'github',
				link: 'https://github.com/kalimah-apps/phpcs_docs',
			},
			{
				icon: 'twitter',
				link: 'https://twitter.com/KalimahApps',
			},
		],
		nav: [
			{
				text: 'Changelog',
				link: '/changelog',
			},
			{
				text: 'Links',
				link: '/links',
			},
		],
		sidebar: getSidebarData(),
		footer: {
			message: 'Released under the MIT License.',
		},
	},
	markdown: {
		// Configure the Markdown-it instance.
		config: (md) => {
			md.use(...createExampleContainer('valid', 'Valid', md))
				.use(...createExampleContainer('invalid', 'Invalid', md));
		},
	},
};