import React, {Component} from "react";
import withTranslation from "next-translate/withTranslation"
import type { I18n } from 'next-translate'
import i18nConfig from "../../i18n.json";
import Router from "next/router";
import Link from "next/link";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import SiteSelector from "../../components/SiteSelector/SiteSelector";

class TopBar extends React.Component<> {
	render() {
		const {t, lang} = this.props.i18n;
		const title = t(`localization:` + process.env.NEXT_PUBLIC_SITE_KEY + `.title`);

		return (
			<>
				<div className="w-full bg-dark-green hidden md:block">
					<div className="max-w-screen-lg mx-auto py-4 px-2 md:flex md:items-center md:justify-between">
						<div className="flex justify-center md:order-2">
							<div className="mr-4">
								<a
									href="https://twitter.com/f1cal"
									className="text-white hover:text-gray-500"
								>
									<span className="sr-only">Twitter</span>
									<svg
										className="h-6 w-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
									</svg>
								</a>
							</div>
							<SiteSelector id="siteSelector" />
							<LanguageSelector id="languageSelector" />
						</div>
						<div className="mt-8 md:mt-0 md:order-1"></div>
					</div>
				</div>
			</>
		);
	}
}

export default withTranslation(TopBar);
