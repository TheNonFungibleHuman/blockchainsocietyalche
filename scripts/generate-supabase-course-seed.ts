import { writeFileSync } from 'node:fs';
import { courseData } from '../src/data/courseData';
import { generateCatalogSql } from './catalogSql';

const OUTFILE = 'supabase/migrations/202609150002_seed_blockchain_101_course.sql';

const sql = generateCatalogSql(courseData as any);
writeFileSync(OUTFILE, sql, 'utf8');
console.log(`Wrote ${OUTFILE}`);
