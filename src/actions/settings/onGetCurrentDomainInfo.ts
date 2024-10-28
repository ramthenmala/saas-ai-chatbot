import { client } from "@/app/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"

export const onGetCurrentDomainInfo = async (domain: string) => {
    const user = await currentUser()
    if (!user) return
    try {
        const userDomain = await client.user.findUnique({
            where: {
                clerkId: user.id,
            },
            select: {
                subscription: {
                    select: {
                        plan: true,
                    },
                },
                domains: {
                    where: {
                        name: {
                            contains: domain,
                        },
                    },
                    select: {
                        id: true,
                        name: true,
                        icon: true,
                        userId: true,
                        products: true,
                        chatBot: {
                            select: {
                                id: true,
                                welcomeMessage: true,
                                icon: true,
                            },
                        },
                    },
                },
            },
        })
        if (userDomain) {
            return userDomain
        }
    } catch (error) {
        console.log(error)
    }
}