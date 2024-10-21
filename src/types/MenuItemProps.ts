export type MenuItemProps = {
    size: 'max' | 'min'
    label: string
    icon: JSX.Element
    path?: string
    current?: string
    onSignOut?(): void
}
