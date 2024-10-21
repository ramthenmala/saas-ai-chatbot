import { client } from "@/app/lib/prisma";
import { currentUser } from "@clerk/nextjs/server"

export const onGetAllAccountDomains = async () => {
    const user = await currentUser();

    if (!user) return;

    try {
        const domains = await client.user.findUnique({
            where: {
                clerkId: user.id
            },
            select: {
                id: true,
                domains: {
                    select: {
                        name: true,
                        icon: true,
                        id: true,
                        customer: {
                            select: {
                                chatRoom: {
                                    select: {
                                        id: true,
                                        live: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
        console.log('...domains', domains)
        return { ...domains }
    } catch (error) {
        console.error(error)
    }
}