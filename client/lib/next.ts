import type { BaseContext } from "next/dist/shared/lib/utils";
import type { CSSProperties } from "react";
import type { NextComponentType } from "next";

interface DefaultProps {
	className?: string;
	id?: string;
	style?: CSSProperties;
}

export type NextComponent<P = {}, IP = {}> = NextComponentType<
	BaseContext,
	IP,
	P
>;
export type Props<P = {}> = P & DefaultProps;
export type PropsWithChildren<Props = DefaultProps> = Props & {
	children?: React.ReactNode;
};
export type ServerSideProps<P = {}> = {
	props: P;
};
