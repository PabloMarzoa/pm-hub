import { PmdsAccountFormatPipe } from './pmds-pipe-account-format.pipe';

describe('PmdsAccountFormatPipe', () => {
    it('create an instance', () => {
        const pipe = new PmdsAccountFormatPipe();
        expect(pipe).toBeTruthy();
    });

    it('transform correctly', () => {
        const pipe = new PmdsAccountFormatPipe();
        expect(pipe.transform('ES121234123412341234')).toBe('ES12 1234 1234 12 341234')
    });

    it('transform correctly without value', () => {
        const pipe = new PmdsAccountFormatPipe();
        expect(pipe.transform('')).toBe('-')
    });
});
