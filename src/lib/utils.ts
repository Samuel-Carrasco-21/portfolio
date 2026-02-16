import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import moment from 'moment';

/**
 * Merges multiple class values into a single string and eliminates duplicates.
 *
 * @param {...ClassValue[]} inputs - An array of class values which could be strings, arrays, or objects.
 * @return {string} - A single merged string of class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats the given datetime value into a localized date string.
 *
 * @param {string | Date} datetime - The datetime value to be formatted.
 * @returns {string} - A string representing the formatted date in 'en-US' locale.
 */
export const formatDatetime = (datetime: string | Date): string => {
  // Si es un objeto Date nativo, lo pasamos directamente
  if (datetime instanceof Date) {
    return moment(datetime).format("MMM YYYY");
  }

  // Si es un string, proporcionamos un array de formatos aceptados al constructor de moment.
  // Esto elimina el "Deprecation warning" porque moment ya no tiene que "adivinar" el formato.
  // 'YYYY-MM-D' y 'YYYY-M-D' cubren casos como "2022-10-1" (tu error específico).
  return moment(datetime, [
    moment.ISO_8601, // Cubre formatos estándar ISO
    "YYYY-MM-DD",    // Formato estándar fecha
    "YYYY-MM-D",     // Cubre tu error (día sin cero inicial)
    "YYYY-M-DD",     // Mes sin cero inicial
    "YYYY-M-D"       // Ambos sin cero inicial
  ]).format("MMM YYYY");
};