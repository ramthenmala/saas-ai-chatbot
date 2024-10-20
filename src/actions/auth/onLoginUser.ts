'use server';

import { client } from "@/app/lib/prisma"
import { currentUser, redirectToSignIn } from "@clerk/nextjs/server";
import { onGetAllAccountDomains } from "../settings/onGetAllAccountDomains";

export const onLoginUser = async () => {
    const user = await currentUser();
    if (!user) redirectToSignIn()
    try {
        const authenticated = await client.user.findUnique({
            where: {
                clerkId: user?.id
            },
            select: {
                fullname: true,
                id: true,
                domains: true
            }
        })

        if (authenticated) {
            const domains = await onGetAllAccountDomains();

            return { status: 200, user: authenticated, domain: domains?.domains }
        }

    } catch (error) {
        console.error(error)
        return {
            status: 400
        }
    }
}