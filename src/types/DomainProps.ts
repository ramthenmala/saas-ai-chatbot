
export type DomainProps = {
    min?: boolean
    domains:
    | {
        id: string
        name: string
        icon: string | null
    }[]
    | null
    | undefined
}