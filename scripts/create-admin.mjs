/**
 * One-time script to create the admin user in Supabase.
 * Usage: SUPABASE_SERVICE_ROLE_KEY=xxx node scripts/create-admin.mjs
 */

const SUPABASE_URL = 'https://dfdnsvzqskcbvabafkzk.supabase.co'
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!SERVICE_ROLE_KEY) {
  console.error('Error: set SUPABASE_SERVICE_ROLE_KEY before running this script.')
  console.error('  SUPABASE_SERVICE_ROLE_KEY=your_key node scripts/create-admin.mjs')
  process.exit(1)
}

const res = await fetch(`${SUPABASE_URL}/auth/v1/admin/users`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    apikey: SERVICE_ROLE_KEY,
    Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
  },
  body: JSON.stringify({
    email: 'admin@robotedge.tech',
    password: 'Test1234!',
    email_confirm: true,
  }),
})

const data = await res.json()

if (!res.ok) {
  console.error('Failed to create user:', data)
  process.exit(1)
}

console.log('✓ Admin user created:', data.email)
console.log('  You can now log in at /admin/login')
