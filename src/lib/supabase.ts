import { createClient } from '@supabase/supabase-js'

// Valori di riserva per questa specifica copia (Sos-cliente-1): le
// variabili d'ambiente su Vercel per questo progetto non stavano arrivando
// alla build per motivi mai chiariti nell'interfaccia. Non sono dati
// segreti (la chiave "publishable" e' protetta dalle policy RLS del
// database, pensata per essere usata nel browser), quindi va bene averli
// come riserva diretta nel codice: l'app funziona comunque anche se in
// futuro le variabili d'ambiente su Vercel dovessero mancare di nuovo.
const FALLBACK_SUPABASE_URL = 'https://fqfwkwozzgeepcixgojs.supabase.co'
const FALLBACK_SUPABASE_ANON_KEY = 'sb_publishable_kK_4PySu6bm4VNDGVl6brg_smFCQeke'

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string | undefined) || FALLBACK_SUPABASE_URL
const supabaseAnonKey =
  (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) || FALLBACK_SUPABASE_ANON_KEY

export const isSupabaseConfigured = true
export const supabaseUrlDiagnostica = supabaseUrl

// Il client non e' tipizzato con lo schema Database: le query usano cast
// mirati (vedi le interfacce in database.types.ts) per mantenere il codice
// semplice ed evitare i vincoli molto rigidi della generics di supabase-js.
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
