import NextAuth from "next-auth";
import { db, firebaseCert } from "./firebase";
import Google from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { Timestamp } from "firebase-admin/firestore";
import { TRIAL_DAYS } from "./confif";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: FirestoreAdapter({
    credential: firebaseCert,
  }),
  providers: [Google],
  events: {},
  callbacks: {},
});