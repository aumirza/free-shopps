import { ACCEPTED_FILE_TYPES } from "@/constants/media";

export function checkFileType(file: File) {
  return ACCEPTED_FILE_TYPES.includes(file.type);
}
