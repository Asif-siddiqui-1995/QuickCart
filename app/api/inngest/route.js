import {
    inngest,
    syncUserCreation,
    syncUserDeletion,
    syncUserUpdation,
} from "@/config/inngest";

import {serve} from "inngest/next";

// Serve API with Inngest client + functions
export const {GET, POST, PUT} = serve(inngest, [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion,
]);
