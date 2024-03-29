import { Specie } from '../domain/entities/specie'
import { Option } from '../domain/interfaces/IOption'
import { toCapitalize } from '../shared/utils'
import { countries } from './geography'
import { colours } from './colours'

const specieArr: Record<string, string> = {
  cat: 'felino',
  dog: 'canino',
}
// export const species: Array<Option> = Object.values(specieArr).map((s, i) => ({
//   value: s,
//   label: toCapitalize(s),
//   code: Object.keys(specieArr)[i].toUpperCase(),
// }))

export const species: Array<Option> = [
  { code: 'CAT', value: 'felino', label: 'felino' },
  { code: 'DOG', value: 'canino', label: 'canino' },
]

export const catBreeds: Array<Option> = [
  { code: 'DLH', value: 'Domestico Pelo Largo', label: 'Domestico Pelo Largo' },
  { code: 'DSH', value: 'Domestico Pelo Corto', label: 'Domestico Pelo Corto' },
  { code: 'ABY', value: 'abyssinian', label: 'Abyssinian' },
  { code: 'BEN', value: 'bengal', label: 'Bengal' },
  { code: 'SIA', value: 'siamese', label: 'Siamese' },
  { code: 'MCO', value: 'maine-coon', label: 'Maine Coon' },
  { code: 'PER', value: 'persian', label: 'Persian' },
  { code: 'RAG', value: 'ragdoll', label: 'Ragdoll' },
  { code: 'SPH', value: 'sphynx', label: 'Sphynx' },
  { code: 'BSH', value: 'british-shorthair', label: 'British Shorthair' },
  { code: 'RUS', value: 'russian-blue', label: 'Russian Blue' },
  { code: 'SFL', value: 'scottish-fold', label: 'Scottish Fold' },
]

export const dogBreeds: Array<Option> = [
  { value: 'Mestizo', label: 'Mestizo', code: 'MES' },
  { value: 'Affenpinscher', label: 'Affenpinscher', code: 'AFP' },
  { value: 'Afghan Hound', label: 'Sabueso Afgano', code: 'AFG' },
  { value: 'Airedale Terrier', label: 'Terrier Airedale', code: 'AIT' },
  { value: 'Akita', label: 'Akita', code: 'AKI' },
  { value: 'Alaskan Malamute', label: 'Malamute de Alaska', code: 'AMA' },
  { value: 'American Bulldog', label: 'Bulldog Americano', code: 'ABD' },
  { value: 'American Cocker Spaniel', label: 'Cocker Spaniel Americano', code: 'ACS' },
  { value: 'American Eskimo Dog', label: 'Perro Esquimal Americano', code: 'AES' },
  { value: 'American Foxhound', label: 'Sabueso Americano', code: 'AFO' },
  { value: 'American Pit Bull Terrier', label: 'Pit Bull Terrier Americano', code: 'APT' },
  { value: 'American Staffordshire Terrier', label: 'Staffordshire Terrier Americano', code: 'AST' },
  { value: 'Anatolian Shepherd Dog', label: 'Perro Pastor de Anatolia', code: 'APD' },
  { value: 'Australian Cattle Dog', label: 'Perro de Ganado Australiano', code: 'AGA' },
  { value: 'Australian Shepherd', label: 'Pastor Australiano', code: 'PAU' },
  { value: 'Australian Terrier', label: 'Terrier Australiano', code: 'ATE' },
  { value: 'Basenji', label: 'Basenji', code: 'BAS' },
  { value: 'Basset Hound', label: 'Basset Hound', code: 'BAH' },
  { value: 'Beagle', label: 'Beagle', code: 'BGL' },
  { value: 'Beauceron', label: 'Beauceron', code: 'BEC' },
  { value: 'Bedlington Terrier', label: 'Terrier Bedlington', code: 'TBE' },
  { value: 'Belgian Malinois', label: 'Malinois Belga', code: 'MBE' },
  { value: 'Belgian Sheepdog', label: 'Perro Pastor Belga', code: 'PBE' },
  { value: 'Belgian Tervuren', label: 'Tervuren Belga', code: 'TBG' },
  { value: 'Bernese Mountain Dog', label: 'Perro de Montaña Bernés', code: 'PMB' },
  { value: 'Bichon Frise', label: 'Bichón Frisé', code: 'BFS' },
  { value: 'Black and Tan Coonhound', label: 'Black and Tan Coonhound', code: 'BTC' },
  { value: 'Black Russian Terrier', label: 'Terrier Ruso Negro', code: 'TRN' },
  { value: 'Bloodhound', label: 'Bloodhound', code: 'BLD' },
  { value: 'Border Terrier', label: 'Terrier Border', code: 'TBO' },
  { value: 'Borzoi', label: 'Borzoi', code: 'BOR' },
  { value: 'Boston Terrier', label: 'Boston Terrier', code: 'BTE' },
  { value: 'Bouvier des Flandres', label: 'Bouvier de Flandes', code: 'BFL' },
  { value: 'Boxer', label: 'Boxer', code: 'BOX' },
  { value: 'Boykin Spaniel', label: 'Spaniel Boykin', code: 'SBO' },
  { value: 'Briard', label: 'Briard', code: 'BRI' },
  { value: 'Brittany Spaniel', label: 'Spaniel Bretón', code: 'SBT' },
  { value: 'Brussels Griffon', label: 'Grifón de Bruselas', code: 'GBR' },
  { value: 'Bull Terrier', label: 'Bull Terrier', code: 'BTR' },
  { value: 'Bulldog', label: 'Bulldog', code: 'BDG' },
  { value: 'Bullmastiff', label: 'Bullmastiff', code: 'BMS' },
  { value: 'Cairn Terrier', label: 'Terrier Cairn', code: 'TCN' },
  { value: 'Cane Corso', label: 'Cane Corso', code: 'CCO' },
  { value: 'Cardigan Welsh Corgi', label: 'Corgi Galés de Cardigan', code: 'CGC' },
  { value: 'Cavalier King Charles Spaniel', label: 'Spaniel Cavalier King Charles', code: 'SCK' },
  { value: 'Chesapeake Bay Retriever', label: 'Retriever de la Bahía de Chesapeake', code: 'RBC' },
  { value: 'Chihuahua', label: 'Chihuahua', code: 'CHI' },
  { value: 'Chinese Crested', label: 'Crestado Chino', code: 'CRC' },
  { value: 'Chinese Shar-Pei', label: 'Shar-Pei Chino', code: 'SHP' },
  { value: 'Chow Chow', label: 'Chow Chow', code: 'CHW' },
  { value: 'Clumber Spaniel', label: 'Spaniel Clumber', code: 'SCL' },
  { value: 'Cockapoo', label: 'Cockapoo', code: 'CPA' },
  { value: 'Cocker Spaniel', label: 'Cocker Spaniel', code: 'CSN' },
  { value: 'Collie', label: 'Collie', code: 'COL' },
  { value: 'Bearded Collie', label: 'Collie Barbudo', code: 'CBA' },
  { value: 'Border Collie', label: 'Border Collie', code: 'BDC' },
  { value: 'Coonhound', label: 'Coonhound', code: 'COO' },
  { value: 'Corgi', label: 'Corgi', code: 'CRG' },
  { value: 'Coton de Tulear', label: 'Coton de Tuléar', code: 'CDT' },
  { value: 'Curly-Coated Retriever', label: 'Retriever de Pelo Rizado', code: 'RPR' },
  { value: 'Dachshund', label: 'Dachshund', code: 'DCH' },
  { value: 'Dalmatian', label: 'Dálmata', code: 'DAL' },
  { value: 'Dandie Dinmont Terrier', label: 'Terrier Dandie Dinmont', code: 'TDD' },
  { value: 'Doberman Pinscher', label: 'Dobermann', code: 'DOB' },
  { value: 'Dogo Argentino', label: 'Dogo Argentino', code: 'DAR' },
  { value: 'Dogue de Bordeaux', label: 'Dogo de Burdeos', code: 'DBO' },
  { value: 'Dutch Shepherd', label: 'Pastor Holandés', code: 'DUT' },
  { value: 'English Bulldog', label: 'Bulldog Inglés', code: 'BIN' },
  { value: 'English Cocker Spaniel', label: 'Cocker Spaniel Inglés', code: 'CSI' },
  { value: 'English Foxhound', label: 'Foxhound Inglés', code: 'FIX' },
  { value: 'English Setter', label: 'Setter Inglés', code: 'SET' },
  { value: 'English Springer Spaniel', label: 'Springer Spaniel Inglés', code: 'SIN' },
  { value: 'English Toy Spaniel', label: 'Spaniel Toy Inglés', code: 'STY' },
  { value: 'Entlebucher Mountain Dog', label: 'Perro de Montaña de Entlebuch', code: 'PME' },
  { value: 'Eskimo Dog', label: 'Perro Esquimal', code: 'ESK' },
  { value: 'Field Spaniel', label: 'Spaniel de Campo', code: 'SFC' },
  { value: 'Finnish Lapphund', label: 'Perro de Laponia Finlandesa', code: 'PLF' },
  { value: 'Finnish Spitz', label: 'Spitz Finlandés', code: 'FSZ' },
  { value: 'Flat-Coated Retriever', label: 'Retriever de Pelo Liso', code: 'RPL' },
  { value: 'French Bulldog', label: 'Bulldog Francés', code: 'BFR' },
  { value: 'German Pinscher', label: 'Pinscher Alemán', code: 'PAM' },
  { value: 'German Shepherd', label: 'Pastor Alemán', code: 'PAL' },
  { value: 'German Shorthaired Pointer', label: 'Braco Alemán de Pelo Corto', code: 'BAC' },
  { value: 'German Wirehaired Pointer', label: 'Braco Alemán de Pelo Duro', code: 'BAD' },
  { value: 'Giant Schnauzer', label: 'Schnauzer Gigante', code: 'SGI' },
  { value: 'Glen of Imaal Terrier', label: 'Terrier Glen de Imaal', code: 'TGI' },
  { value: 'Golden Retriever', label: 'Golden Retriever', code: 'GDR' },
  { value: 'Goldendoodle', label: 'Goldendoodle', code: 'GDD' },
  { value: 'Gordon Setter', label: 'Setter Gordon', code: 'SGO' },
  { value: 'Great Dane', label: 'Gran Danés', code: 'GDA' },
  { value: 'Great Pyrenees', label: 'Gran Pirineo', code: 'GPR' },
  { value: 'Greater Swiss Mountain Dog', label: 'Gran Boyero Suizo', code: 'GBS' },
  { value: 'Greyhound', label: 'Galgo', code: 'GRH' },
  { value: 'Italian Greyhound', label: 'Galgo Italiano', code: 'GAI' },
  { value: 'Spanish Greyhound', label: 'Galgo Español', code: 'GAE' },
  { value: 'Harrier', label: 'Harrier', code: 'HAR' },
  { value: 'Havanese', label: 'Havanese', code: 'HAV' },
  { value: 'Irish Setter', label: 'Setter Irlandés', code: 'SIR' },
  { value: 'Irish Terrier', label: 'Terrier Irlandés', code: 'TIR' },
  { value: 'Irish Water Spaniel', label: 'Spaniel de Agua Irlandés', code: 'SAI' },
  { value: 'Irish Wolfhound', label: 'Wolfhound Irlandés', code: 'WIR' },
  { value: 'Jack Russell Terrier', label: 'Terrier Jack Russell', code: 'TJR' },
  { value: 'Japanese Chin', label: 'Chin Japonés', code: 'CJA' },
  { value: 'Japanese Spitz', label: 'Spitz Japonés', code: 'SPJ' },
  { value: 'Keeshond', label: 'Keeshond', code: 'KEE' },
  { value: 'Kelpie', label: 'Kelpie', code: 'KEL' },
  { value: 'Kerry Blue Terrier', label: 'Terrier Kerry Blue', code: 'TKB' },
  { value: 'King Charles Spaniel', label: 'Spaniel King Charles', code: 'SKC' },
  { value: 'Komondor', label: 'Komondor', code: 'KOM' },
  { value: 'Kooikerhondje', label: 'Kooikerhondje', code: 'KOO' },
  { value: 'Kuvasz', label: 'Kuvasz', code: 'KUV' },
  { value: 'Labradoodle', label: 'Labradoodle', code: 'LAD' },
  { value: 'Labrador Retriever', label: 'Labrador Retriever', code: 'LRT' },
  { value: 'Lagotto Romagnolo', label: 'Lagotto Romagnolo', code: 'LAG' },
  { value: 'Lancashire Heeler', label: 'Lancashire Heeler', code: 'LHE' },
  { value: 'Leonberger', label: 'Leonberger', code: 'LEO' },
  { value: 'Lhasa Apso', label: 'Lhasa Apso', code: 'LAP' },
  { value: 'Löwchen', label: 'Löwchen', code: 'LWN' },
  { value: 'Maltese', label: 'Maltese', code: 'MAL' },
  { value: 'Manchester Terrier', label: 'Terrier de Manchester', code: 'TMA' },
  { value: 'Mastiff', label: 'Mastín', code: 'MFF' },
  { value: 'Miniature Bull Terrier', label: 'Bull Terrier Miniatura', code: 'BTM' },
  { value: 'Miniature Pinscher', label: 'Pinscher Miniatura', code: 'PMA' },
  { value: 'Miniature Schnauzer', label: 'Schnauzer Miniatura', code: 'SMA' },
  { value: 'Mudi', label: 'Mudi', code: 'MUD' },
  { value: 'Neapolitan Mastiff', label: 'Mastín Napolitano', code: 'MNA' },
  { value: 'Newfoundland', label: 'Terranova', code: 'TNA' },
  { value: 'Norfolk Terrier', label: 'Terrier Norfolk', code: 'TNO' },
  { value: 'Norwegian Buhund', label: 'Buhund Noruego', code: 'BNO' },
  { value: 'Norwegian Elkhound', label: 'Elkhound Noruego', code: 'ENO' },
  { value: 'Norwegian Lundehund', label: 'Lundehund Noruego', code: 'LNO' },
  { value: 'Norwich Terrier', label: 'Terrier Norwich', code: 'TNU' },
  { value: 'Nova Scotia Duck Tolling Retriever', label: 'Retriever de Cobro de Nueva Escocia', code: 'RCN' },
  { value: 'Old English Sheepdog', label: 'Ovejero Inglés', code: 'OIN' },
  { value: 'Otterhound', label: 'Otterhound', code: 'OTH' },
  { value: 'Papillon', label: 'Papillón', code: 'PAP' },
  { value: 'Pekingese', label: 'Pekinés', code: 'PEK' },
  { value: 'Pembroke Welsh Corgi', label: 'Corgi Galés de Pembroke', code: 'CGP' },
  { value: 'Petit Basset Griffon Vendéen', label: 'Petit Basset Griffon Vendéen', code: 'PGV' },
  { value: 'Pharaoh Hound', label: 'Perro del Faraón', code: 'PDF' },
  { value: 'Plott', label: 'Plott', code: 'PLO' },
  { value: 'Pointer', label: 'Pointer', code: 'PNT' },
  { value: 'Polish Lowland Sheepdog', label: 'Pastor de las Tierras Bajas Polaco', code: 'PTB' },
  { value: 'Pomeranian', label: 'Pomerania', code: 'POM' },
  { value: 'Poodle', label: 'Caniche', code: 'CCH' },
  { value: 'Portuguese Water Dog', label: 'Perro de Agua Portugués', code: 'PWD' },
  { value: 'Pug', label: 'Pug', code: 'PUG' },
  { value: 'Puli', label: 'Puli', code: 'PUL' },
  { value: 'Pumi', label: 'Pumi', code: 'PUM' },
  { value: 'Pyrenean Shepherd', label: 'Pastor de los Pirineos', code: 'PPS' },
  { value: 'Rat Terrier', label: 'Rat Terrier', code: 'RTR' },
  { value: 'Redbone Coonhound', label: 'Coonhound Redbone', code: 'COR' },
  { value: 'Rhodesian Ridgeback', label: 'Ridgeback de Rodesia', code: 'RRI' },
  { value: 'Rottweiler', label: 'Rottweiler', code: 'ROT' },
  { value: 'Saint Bernard', label: 'San Bernardo', code: 'SBR' },
  { value: 'Saluki', label: 'Saluki', code: 'SLK' },
  { value: 'Samoyed', label: 'Samoyedo', code: 'SAY' },
  { value: 'Schipperke', label: 'Schipperke', code: 'SCH' },
  { value: 'Scottish Deerhound', label: 'Lebrel Escocés', code: 'LEC' },
  { value: 'Scottish Terrier', label: 'Terrier Escocés', code: 'TES' },
  { value: 'Sealyham Terrier', label: 'Terrier Sealyham', code: 'TSL' },
  { value: 'Shetland Sheepdog', label: 'Shetland Sheepdog', code: 'SSD' },
  { value: 'Shiba Inu', label: 'Shiba Inu', code: 'SHI' },
  { value: 'Shih Tzu', label: 'Shih Tzu', code: 'SHT' },
  { value: 'Siberian Husky', label: 'Husky Siberiano', code: 'HSB' },
  { value: 'Silky Terrier', label: 'Terrier Sedoso', code: 'TSE' },
  { value: 'Skye Terrier', label: 'Terrier Skye', code: 'TSK' },
  { value: 'Sloughi', label: 'Sloughi', code: 'SLO' },
  { value: 'Small Munsterlander Pointer', label: 'Pequeño Munsterlander Pointer', code: 'PMP' },
  { value: 'Soft-Coated Wheaten Terrier', label: 'Terrier de Trigo de Pelo Suave', code: 'TTS' },
  { value: 'Spanish Water Dog', label: 'Perro de Agua Español', code: 'PAE' },
  { value: 'Spinone Italiano', label: 'Spinone Italiano', code: 'SPI' },
  { value: 'Staffordshire Bull Terrier', label: 'Bull Terrier Staffordshire', code: 'BST' },
  { value: 'Standard Schnauzer', label: 'Schnauzer Standard', code: 'SST' },
  { value: 'Sussex Spaniel', label: 'Spaniel Sussex', code: 'SSX' },
  { value: 'Swedish Vallhund', label: 'Vallhund Sueco', code: 'VSD' },
  { value: 'Tibetan Mastiff', label: 'Mastín Tibetano', code: 'MTI' },
  { value: 'Tibetan Spaniel', label: 'Spaniel Tibetano', code: 'STI' },
  { value: 'Tibetan Terrier', label: 'Terrier Tibetano', code: 'TTI' },
  { value: 'Toy Fox Terrier', label: 'Terrier Toy Fox', code: 'TTF' },
  { value: 'Treeing Walker Coonhound', label: 'Coonhound Treeing Walker', code: 'CTW' },
  { value: 'Vizsla', label: 'Vizsla', code: 'VIZ' },
  { value: 'Weimaraner', label: 'Weimaraner', code: 'WEI' },
  { value: 'Welsh Springer Spaniel', label: 'Springer Spaniel Galés', code: 'SSG' },
  { value: 'Welsh Terrier', label: 'Terrier Galés', code: 'TGL' },
  { value: 'West Highland White Terrier', label: 'West Highland White Terrier', code: 'WHT' },
  { value: 'Whippet', label: 'Whippet', code: 'WHI' },
  { value: 'Wire Fox Terrier', label: 'Terrier Fox de Pelo Duro', code: 'TFD' },
  { value: 'Wirehaired Pointing Griffon', label: 'Grifón de Muestra de Pelo Duro', code: 'GMD' },
  { value: 'Wirehaired Vizsla', label: 'Wirehaired Vizsla', code: 'WVZ' },
  { value: 'Xoloitzcuintli', label: 'Xoloitzcuintli', code: 'XOL' },
  { value: 'Yorkshire Terrier', label: 'Yorkshire Terrier', code: 'YKT' },
]

export const specieBreeds = (specie: string): Array<Option> => {
  if (!specie) return []
  const breeds: Record<string, Array<Option>> = {
    felino: catBreeds,
    canino: dogBreeds,
  }

  return breeds[specie]
}

export const sexOpts: Option[] = [
  { value: 'male', label: 'macho', code: 'male' },
  { value: 'female', label: 'hembra', code: 'female' },
]

export const unitWeightOpts: Option[] = [
  { value: 'kilos', label: 'kilos', code: 'kgs' },
  { value: 'gramos', label: 'gramos', code: 'grs' },
]

export function getLabel(value: string, field: string, ref?: string): string {
  if (!value) return ''
  switch (field) {
    case `sex`:
      return getLabelFromOptions(sexOpts, value)
    case 'coat':
      return value
        .split(', ')
        .map((c) => toCapitalize(getLabelFromOptions(colours, c)))
        .join(', ')
    case 'country':
      return getLabelFromOptions(countries, value)
    case 'breed':
      return getLabelFromOptions(specieBreeds(ref || 'canino'), value)
    case 'specie':
      return getLabelFromOptions(species, value)
    default:
      return ''
  }
}

function getLabelFromOptions(arr: Array<Option>, value: string): string {
  return arr.filter((f) => f.value === value).map((m) => m.label)[0]
}
