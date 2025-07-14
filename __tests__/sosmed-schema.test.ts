import { sosmedSchema } from '../domain/sosmed-schema';

describe('Sosmed Schema Validation', () => {
  test('should validate correct social media URLs', () => {
    const validData = {
      facebook: 'https://facebook.com/testuser',
      instagram: 'https://instagram.com/testuser',
      linkedin: 'https://linkedin.com/in/testuser',
    };

    const result = sosmedSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  test('should reject invalid Facebook URL', () => {
    const invalidData = {
      facebook: 'https://twitter.com/testuser',
    };

    const result = sosmedSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Please enter a valid Facebook URL');
    }
  });

  test('should reject invalid Instagram URL', () => {
    const invalidData = {
      instagram: 'https://facebook.com/testuser',
    };

    const result = sosmedSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Please enter a valid Instagram URL');
    }
  });

  test('should reject invalid LinkedIn URL', () => {
    const invalidData = {
      linkedin: 'https://github.com/testuser',
    };

    const result = sosmedSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Please enter a valid LinkedIn URL');
    }
  });

  test('should allow empty values', () => {
    const emptyData = {
      facebook: '',
      instagram: '',
      linkedin: '',
    };

    const result = sosmedSchema.safeParse(emptyData);
    expect(result.success).toBe(true);
  });
});