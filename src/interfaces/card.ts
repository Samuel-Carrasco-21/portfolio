// src/interfaces/card.ts
export interface CardInfo {
  title: string;          // Ej: "Full Stack Developer"
  subtitle: string;       // Ej: "Prospera" o "Hackathon"
  location?: string;      // Ej: "La Paz, Bolivia"
  startDate: string;      // Fecha raw o formateada
  endDate?: string;       // Fecha raw o formateada
  current?: boolean;      // Si es actual
  description: string;    // Texto largo
  listItems?: string[];   // Lista de goals o responsibilities
  tags?: string[];        // Opcional: Tecnologías usadas (React, etc.)
}
