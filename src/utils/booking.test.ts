import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildWhatsAppProductMessage,
  getWhatsAppProductUrl,
  buildWhatsAppVisitMessage,
  validateVisitForm,
} from './booking';

test('buildWhatsAppProductMessage formats polite inquiry with name and category', () => {
  const msg = buildWhatsAppProductMessage('Bayam Hidroponik Segar', 'Sayuran');
  assert.ok(msg.includes('*Bayam Hidroponik Segar*'));
  assert.ok(msg.includes('Kategori: Sayuran'));
  assert.ok(msg.includes('ketersediaan stok'));
});

test('getWhatsAppProductUrl generates encoded wa.me URL with phone number', () => {
  const url = getWhatsAppProductUrl('Telur Ayam Segar', 'Telur ayam', '6281234567890');
  assert.ok(url.startsWith('https://wa.me/6281234567890?text='));
  assert.ok(url.includes(encodeURIComponent('Telur Ayam Segar')));
});

test('validateVisitForm returns errors when required fields are missing', () => {
  const result = validateVisitForm({});
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.visitDate);
  assert.ok(result.errors.estimatedVisitors);
});

test('validateVisitForm succeeds with valid complete inputs', () => {
  const result = validateVisitForm({
    fullName: 'Budi Santoso',
    institution: 'SDN Surabaya 01',
    visitorCategory: 'Sekolah',
    phone: '081234567890',
    visitDate: '2026-12-15',
    estimatedVisitors: 30,
    activityPackage: 'Paket Edukasi Lengkap (4 Sektor)',
  });
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('buildWhatsAppVisitMessage builds comprehensive reservation text', () => {
  const msg = buildWhatsAppVisitMessage({
    fullName: 'Ibu Ratna',
    institution: 'Komunitas PKK RW 05',
    visitorCategory: 'Komunitas',
    phone: '08123456789',
    visitDate: '2026-11-20',
    estimatedVisitors: 25,
    activityPackage: 'Workshop Pengolahan Kompos & Urban Farming',
    notes: 'Mohon info area parkir minibus',
  });
  assert.ok(msg.includes('Ibu Ratna'));
  assert.ok(msg.includes('Komunitas PKK RW 05'));
  assert.ok(msg.includes('25 Orang'));
  assert.ok(msg.includes('area parkir'));
});
