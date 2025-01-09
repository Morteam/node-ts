// AAA: Arrange - Act - Assert

describe('Tests in app.ts', () => {
    test('Should be true', () => {
        // Arrange
        const NUMBER_A = 14;
        const NUMBER_B = 35;
        const NUMBER_RESULT = 49;

        // Act
        const result = NUMBER_A + NUMBER_B;

        // Assert
        expect(result).toBe(NUMBER_RESULT);
    })
})
