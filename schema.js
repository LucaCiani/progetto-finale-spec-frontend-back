// THIS FILE IS AUTO-GENERATED from types.ts - DO NOT EDIT DIRECTLY
import z from 'zod';


// Schema generated from types.ts Product type
export const ProductSchema = z.object({
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


export function validateProduct(data) {
  try {
    const result = ProductSchema.parse(data);
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
  "product": validateProduct
};

// Export readonly properties for each type to prevent updates
export const readonlyProperties = {
  "product": []
};
