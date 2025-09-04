import {
    Inngest,
    syncUserCreation,
    syncUserDeletion,
    syncUserUpdation,
} from "@/config/inngest";
import {serve} from "inngest/next";

// Create a client to send and receive events
export const inngest = new Inngest({id: ""});

// Create an API that serves zero functions
export default serve({
    client: inngest,
    functions: [syncUserCreation, syncUserUpdation, syncUserDeletion],
});
