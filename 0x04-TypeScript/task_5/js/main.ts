// Interfaces avec "branding" pour nominal typing
export interface MajorCredits {
  credits: number;
  __brand: "major"; // propriété unique pour le brand
}

export interface MinorCredits {
  credits: number;
  __brand: "minor"; // propriété unique pour le brand
}

// Fonction pour sommer des MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "major"
  };
}

// Fonction pour sommer des MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "minor"
  };
}

// Exemple d'utilisation
const math: MajorCredits = { credits: 3, __brand: "major" };
const physics: MajorCredits = { credits: 4, __brand: "major" };

const art: MinorCredits = { credits: 2, __brand: "minor" };
const music: MinorCredits = { credits: 1, __brand: "minor" };

const totalMajor = sumMajorCredits(math, physics);
const totalMinor = sumMinorCredits(art, music);

console.log("Total Major Credits:", totalMajor.credits);
console.log("Total Minor Credits:", totalMinor.credits);
