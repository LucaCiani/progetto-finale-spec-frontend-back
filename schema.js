// THIS FILE IS AUTO-GENERATED from types.ts - DO NOT EDIT DIRECTLY
import z from 'zod';


// Schema generated from types.ts Iphone type
export const IphoneSchema = z.object({
  id: z.number().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  title: z.string({ required_error: "Title is required" }),
  category: z.string({ required_error: "Category is required" }),
  display: z.string(),
  fotocamerePosteriori: z.string(),
  fotocameraFrontale: z.string(),
  memorie: z.string(),
  chip: z.string(),
  bluetooth: z.number(),
  connettori: z.string(),
  dimensioni: z.string(),
  peso: z.string(),
  anno: z.number(),
  imagesUrl: z.array(z.string()),
}).strict(); // Add strict mode to reject extra properties

// Schema generated from types.ts Ipad type
export const IpadSchema = z.object({
  id: z.number().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  title: z.string({ required_error: "Title is required" }),
  category: z.string({ required_error: "Category is required" }),
  display: z.string(),
  fotocamerePosteriori: z.string(),
  fotocameraFrontale: z.string(),
  memorie: z.string(),
  chip: z.string(),
  bluetooth: z.number(),
  connettori: z.string(),
  dimensioni: z.string(),
  peso: z.string(),
  anno: z.number(),
  imagesUrl: z.array(z.string()),
}).strict(); // Add strict mode to reject extra properties


export function validateIphone(data) {
  try {
    const result = IphoneSchema.parse(data);
    return { valid: true, data: result };
  } catch (error) {
    return { 
      valid: false, 
      errors: error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
      }))
    };
  }
}

export function validateIpad(data) {
  try {
    const result = IpadSchema.parse(data);
    return { valid: true, data: result };
  } catch (error) {
    return { 
      valid: false, 
      errors: error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
      }))
    };
  }
}

// Export all validators as a map for dynamic usage
export const validators = {
  "iphone": validateIphone,
  "ipad": validateIpad
};

// Export readonly properties for each type to prevent updates
export const readonlyProperties = {
  "iphone": [],
  "ipad": []
};
