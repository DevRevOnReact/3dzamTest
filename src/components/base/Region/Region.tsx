
import React, {
	type HTMLAttributes,
	type PropsWithChildren,
	useContext,
} from 'react';

import {
	HeadingIdContext,
	HeadingLevelContext,
} from 'src/context/HeadingContext';

import cx from './index.module.scss';

export interface RegionProps extends HTMLAttributes<HTMLDivElement> {
	Tag?: 'main' | 'section';
	withContainer?: boolean;
}

/**
 *
 * @see https://sergiodxa.com/articles/keep-heading-levels-consistent-with-react-context
 * @see https://beta.reactjs.org/learn/passing-data-deeply-with-context
 */

export function Region({
	id,
	children,
	withContainer = false,
	Tag = 'section',
	className,
	...props
}: PropsWithChildren<RegionProps>) {

	const headingLevel = useContext(HeadingLevelContext);
	const nextLevel = headingLevel + 1;
	return (
	
			<HeadingLevelContext.Provider value={nextLevel}>
				<Tag
					className={cx(
						{ Region: Tag === 'section', container: withContainer },
						className
					)}
					{...props}
				
				>
					{children}
				</Tag>
			</HeadingLevelContext.Provider>
	);
}
