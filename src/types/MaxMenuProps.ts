export type MaxMenuProps = {
    onExpand(): void
    current: string
    onSignOut(): void
    domains:
    | {
        id: string
        name: string
        icon: string | null
    }[]
    | null
    | undefined
}