import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const LEADS_FILE = path.join(process.cwd(), 'data', 'leads.json');

function ensureLeadsFile() {
  const dir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(LEADS_FILE)) {
    fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2), 'utf-8');
  }
}

function readLeads(): object[] {
  try {
    ensureLeadsFile();
    const raw = fs.readFileSync(LEADS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeLeads(leads: object[]) {
  ensureLeadsFile();
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, ...data } = body;

    if (!type || !['demo', 'contact'].includes(type)) {
      return NextResponse.json({ error: 'Invalid lead type' }, { status: 400 });
    }

    const leads = readLeads();
    const newLead = {
      id: `LEAD-${Date.now()}`,
      type,
      submittedAt: new Date().toISOString(),
      ...data,
    };

    leads.unshift(newLead); // newest first
    writeLeads(leads);

    console.log(`[LEAD] New ${type.toUpperCase()} lead:`, newLead);
    return NextResponse.json({ success: true, leadId: newLead.id }, { status: 201 });
  } catch (err) {
    console.error('[LEAD] Error saving lead:', err);
    return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  // Protect the leads viewer — only accessible with the secret admin key
  const adminKey = req.headers.get('x-admin-key') || req.nextUrl.searchParams.get('key');
  const SECRET = process.env.LEADS_ADMIN_KEY || 'monsrow-admin-2024';

  if (adminKey !== SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const leads = readLeads();
    return NextResponse.json({ leads, total: leads.length }, { status: 200 });
  } catch (err) {
    console.error('[LEAD] Error reading leads:', err);
    return NextResponse.json({ error: 'Failed to read leads' }, { status: 500 });
  }
}
