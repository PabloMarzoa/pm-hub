function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`;
		}
		return `rgb(var(${variableName}))`;
	};
}

module.exports = {
	hiddenSaas: { display: 'none' },
	hiddenEmi: { display: 'none' },
	extend: {
		screens: {
			mobile: { max: '767px' },
			tablet: { min: '768px', max: '1279px' },
			desktop: { min: '1280px' },
		},
		fontFamily: {
			PmHeadlineRegular: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
			PmHeadlineBold: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
			PmMicroText: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
			PmMicroTextBold: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
		},
		boxShadow: {
			card: '0 4px 30px 0 rgba(0,0,0,0.05)',
			floating: '0 1px 10px 0 rgba(87, 87, 87, 0.2)',
			raised: '0 1px 6px 0 rgba(87, 87, 87, 0.2)',
		},
		borderRadius: {
			pmds: 'var(--radius-default)',
		},
		colors: {
			'skin-primary-01': 'rgb(var(--primary-01))',
			'skin-primary-02': 'rgb(var(--primary-02))',
			'skin-primary-03': 'rgb(var(--primary-03))',
			'skin-primary-04': 'rgb(var(--primary-04))',
			'skin-primary-05': 'rgb(var(--primary-05))',
			'skin-primary-06': 'rgb(var(--primary-06))',
			'skin-primary-07': 'rgb(var(--primary-07))',
			'skin-primary-08': 'rgb(var(--primary-08))',
			'skin-primary-09': 'rgb(var(--primary-09))',
			'skin-primary-10': 'rgb(var(--primary-10))',
			'skin-primary-11': 'rgb(var(--primary-11))',
			'skin-primary-12': 'rgb(var(--primary-12))',
			'skin-boston-02': 'rgb(var(--boston-02))',
			'skin-santander-red-20': 'rgb(var(--santander-red-20))',
			'skin-secondary-01': 'rgb(var(--secondary-01))',
			'skin-secondary-02': 'rgb(var(--secondary-02))',
			'skin-secondary-03': 'rgb(var(--secondary-03))',
			'skin-secondary-04': 'rgb(var(--secondary-04))',
			'skin-secondary-05': 'rgb(var(--secondary-05))',
			'skin-secondary-06': 'rgb(var(--secondary-06))',
			'skin-secondary-accesible-01': 'rgb(var(--secondary-accesible-01))',
			'skin-secondary-accesible-02': 'rgb(var(--secondary-accesible-02))',
			'skin-secondary-accesible-03': 'rgb(var(--secondary-accesible-03))',
			'skin-secondary-accesible-04': 'rgb(var(--secondary-accesible-04))',
			'skin-secondary-accesible-05': 'rgb(var(--secondary-accesible-05))',
			'skin-secondary-accesible-06': 'rgb(var(--secondary-accesible-06))',
			'skin-neutral-01': 'rgb(var(--neutral-01))',
			'skin-neutral-02': 'rgb(var(--neutral-02))',
			'skin-neutral-03': 'rgb(var(--neutral-03))',
			'skin-neutral-04': 'rgb(var(--neutral-04))',
			'skin-neutral-05': 'rgb(var(--neutral-05))',
			'skin-neutral-06': 'rgb(var(--neutral-06))',
			'skin-neutral-07': 'rgb(var(--neutral-07))',
			'skin-neutral-08': 'rgb(var(--neutral-08))',
			'skin-neutral-09': 'rgb(var(--neutral-09))',
			'skin-neutral-10': 'rgb(var(--neutral-10))',
			'skin-support-error-base': 'rgb(var(--support-error-base))',
			'skin-support-error-darker': 'rgb(var(--support-error-darker))',
			'skin-support-error-lighter': 'rgb(var(--support-error-lighter))',
			'skin-support-success-base': 'rgb(var(--support-success-base))',
			'skin-support-success-darker': 'rgb(var(--support-success-darker))',
			'skin-support-success-lighter':
				'rgb(var(--support-success-lighter))',
			'skin-support-warning-base': 'rgb(var(--support-warning-base))',
			'skin-support-warning-darker': 'rgb(var(--support-warning-darker))',
			'skin-support-warning-lighter':
				'rgb(var(--support-warning-lighter))',
			'skin-support-info-base': 'rgb(var(--support-info-base))',
			'skin-support-info-darker': 'rgb(var(--support-info-darker))',
			'skin-support-info-lighter': 'rgb(var(--support-info-lighter))',
			'skin-support-action-base': 'rgb(var(--support-action-base))',
			'skin-support-action-darker': 'rgb(var(--support-action-darker))',
			'skin-support-action-lighter': 'rgb(var(--support-action-lighter))',
			'skin-social-dropbox': 'rgb(var(--social-dropbox))',
			'skin-social-facebook': 'rgb(var(--social-facebook))',
			'skin-social-google-plus': 'rgb(var(--social-google-plus))',
			'skin-social-instagram': 'rgb(var(--social-instagram))',
			'skin-social-linkedin': 'rgb(var(--social-linkedin))',
			'skin-social-skype': 'rgb(var(--social-skype))',
			'skin-social-spotify': 'rgb(var(--social-spotify))',
			'skin-social-twitter': 'rgb(var(--social-twitter))',
			'skin-social-santander': 'rgb(var(--social-santander))',
			'skin-primary-01-05': 'rgb(var(--color-primary-01-05))',
			'skin-primary-01-10': 'rgb(var(--color-primary-01-10))',
			'skin-primary-01-20': 'rgb(var(--color-primary-01-20))',
			'skin-primary-01-30': 'rgb(var(--color-primary-01-30))',
			'skin-primary-01-40': 'rgb(var(--color-primary-01-40))',
			'skin-primary-01-50': 'rgb(var(--color-primary-01-50))',
			'skin-primary-01-60': 'rgb(var(--color-primary-01-60))',
			'skin-primary-01-70': 'rgb(var(--color-primary-01-70))',
			'skin-primary-01-80': 'rgb(var(--color-primary-01-80))',
			'skin-primary-01-90': 'rgb(var(--color-primary-01-90))',
			'skin-primary-09-10': 'rgb(var(--color-primary-09-10))',
			'skin-primary-09-20': 'rgb(var(--color-primary-09-20))',
			'skin-primary-09-30': 'rgb(var(--color-primary-09-30))',
			'skin-primary-09-40': 'rgb(var(--color-primary-09-40))',
			'skin-primary-09-50': 'rgb(var(--color-primary-09-50))',
			'skin-primary-09-60': 'rgb(var(--color-primary-09-60))',
			'skin-primary-09-70': 'rgb(var(--color-primary-09-70))',
			'skin-primary-09-80': 'rgb(var(--color-primary-09-80))',
			'skin-primary-09-90': 'rgb(var(--color-primary-09-90))',
			'skin-purple-tint-05': 'rgb(var(--color-purple-tint-05))',
			'skin-purple-tint-10': 'rgb(var(--color-purple-tint-10))',
			'skin-purple-tint-20': 'rgb(var(--color-purple-tint-20))',
			'skin-purple-tint-30': 'rgb(var(--color-purple-tint-30))',
			'skin-purple-tint-40': 'rgb(var(--color-purple-tint-40))',
			'skin-purple-tint-50': 'rgb(var(--color-purple-tint-50))',
			'skin-purple-tint-60': 'rgb(var(--color-purple-tint-60))',
			'skin-purple-tint-70': 'rgb(var(--color-purple-tint-70))',
			'skin-purple-tint-80': 'rgb(var(--color-purple-tint-80))',
			'skin-purple-tint-90': 'rgb(var(--color-purple-tint-90))',
			'skin-blue-tint-05': 'rgb(var(--color-blue-tint-05))',
			'skin-blue-tint-10': 'rgb(var(--color-blue-tint-10))',
			'skin-blue-tint-20': 'rgb(var(--color-blue-tint-20))',
			'skin-blue-tint-30': 'rgb(var(--color-blue-tint-30))',
			'skin-blue-tint-40': 'rgb(var(--color-blue-tint-40))',
			'skin-blue-tint-50': 'rgb(var(--color-blue-tint-50))',
			'skin-blue-tint-60': 'rgb(var(--color-blue-tint-60))',
			'skin-blue-tint-70': 'rgb(var(--color-blue-tint-70))',
			'skin-blue-tint-80': 'rgb(var(--color-blue-tint-80))',
			'skin-blue-tint-90': 'rgb(var(--color-blue-tint-90))',
			'skin-green-tint-05': 'rgb(var(--color-green-tint-05))',
			'skin-green-tint-10': 'rgb(var(--color-green-tint-10))',
			'skin-green-tint-20': 'rgb(var(--color-green-tint-20))',
			'skin-green-tint-30': 'rgb(var(--color-green-tint-30))',
			'skin-green-tint-40': 'rgb(var(--color-green-tint-40))',
			'skin-green-tint-50': 'rgb(var(--color-green-tint-50))',
			'skin-green-tint-60': 'rgb(var(--color-green-tint-60))',
			'skin-green-tint-70': 'rgb(var(--color-green-tint-70))',
			'skin-green-tint-80': 'rgb(var(--color-green-tint-80))',
			'skin-green-tint-90': 'rgb(var(--color-green-tint-90))',
			'skin-turquoise-tint-05': 'rgb(var(--color-turquoise-tint-05))',
			'skin-turquoise-tint-10': 'rgb(var(--color-turquoise-tint-10))',
			'skin-turquoise-tint-20': 'rgb(var(--color-turquoise-tint-20))',
			'skin-turquoise-tint-30': 'rgb(var(--color-turquoise-tint-30))',
			'skin-turquoise-tint-40': 'rgb(var(--color-turquoise-tint-40))',
			'skin-turquoise-tint-50': 'rgb(var(--color-turquoise-tint-50))',
			'skin-turquoise-tint-60': 'rgb(var(--color-turquoise-tint-60))',
			'skin-turquoise-tint-70': 'rgb(var(--color-turquoise-tint-70))',
			'skin-turquoise-tint-80': 'rgb(var(--color-turquoise-tint-80))',
			'skin-turquoise-tint-90': 'rgb(var(--color-turquoise-tint-90))',
			'skin-yellow-tint-05': 'rgb(var(--color-yellow-tint-05))',
			'skin-yellow-tint-10': 'rgb(var(--color-yellow-tint-10))',
			'skin-yellow-tint-20': 'rgb(var(--color-yellow-tint-20))',
			'skin-yellow-tint-30': 'rgb(var(--color-yellow-tint-30))',
			'skin-yellow-tint-40': 'rgb(var(--color-yellow-tint-40))',
			'skin-yellow-tint-50': 'rgb(var(--color-yellow-tint-50))',
			'skin-yellow-tint-60': 'rgb(var(--color-yellow-tint-60))',
			'skin-yellow-tint-70': 'rgb(var(--color-yellow-tint-70))',
			'skin-yellow-tint-80': 'rgb(var(--color-yellow-tint-80))',
			'skin-yellow-tint-90': 'rgb(var(--color-yellow-tint-90))',
			'skin-grey-tint-05': 'rgb(var(--color-grey-tint-05))',
			'skin-grey-tint-10': 'rgb(var(--color-grey-tint-10))',
			'skin-grey-tint-20': 'rgb(var(--color-grey-tint-20))',
			'skin-grey-tint-30': 'rgb(var(--color-grey-tint-30))',
			'skin-grey-tint-40': 'rgb(var(--color-grey-tint-40))',
			'skin-grey-tint-50': 'rgb(var(--color-grey-tint-50))',
			'skin-grey-tint-60': 'rgb(var(--color-grey-tint-60))',
			'skin-grey-tint-70': 'rgb(var(--color-grey-tint-70))',
			'skin-grey-tint-80': 'rgb(var(--color-grey-tint-80))',
			'skin-grey-tint-90': 'rgb(var(--color-grey-tint-90))',
			// CONTEXT COLORS TEXT
			'color-text-primary': 'rgb(var(--color-text-primary))',
			'color-text-secondary': 'rgb(var(--color-text-secondary))',
			'color-text-tertiary': 'rgb(var(--color-text-tertiary))',
			'color-text-disabled': 'rgb(var(--color-text-disabled))',
			'color-text-success': 'rgb(var(--color-text-success))',
			'color-text-error': 'rgb(var(--color-text-error))',
			'color-text-warning': 'rgb(var(--color-text-warning))',
			'color-text-info': 'rgb(var(--color-text-info))',
			// CONTEXT COLORS BACKGROUND
			'color-background-default': 'rgb(var(--color-background-default))',
			'color-background-alternative':
				'rgb(var(--color-background-alternative))',
			'color-background-success': 'rgb(var(--color-background-success))',
			'color-background-error': 'rgb(var(--color-background-error))',
			'color-background-warning': 'rgb(var(--color-background-warning))',
			'color-background-info': 'rgb(var(--color-background-info))',
			'color-background-overlay-primary':
				'rgba(var(--color-background-overlay-primary))',
			'color-background-overlay-secondary':
				'rgba(var(--color-background-overlay-secondary))',
			// CONTEXT COLORS SURFACE
			'color-surface-primary': 'rgb(var(--color-surface-primary))',
			'color-surface-secondary': 'rgb(var(--color-surface-secondary))',
			'color-surface-tertiary': 'rgb(var(--color-surface-tertiary))',
			'color-surface-hover': 'rgb(var(--color-surface-hover))',
			'color-surface-selected': 'rgb(var(--color-surface-selected))',
			'color-surface-selected-alternative':
				'rgb(var(--color-surface-selected-alternative))',
			'color-surface-disabled': 'rgb(var(--color-surface-disabled))',
			// CONTEXT COLORS ICON
			'color-icon-default': 'rgb(var(--color-icon-default))',
			'color-icon-disabled': 'rgb(var(--color-icon-disabled))',
			'color-icon-alternative': 'rgb(var(--color-icon-alternative))',
			'color-icon-action': 'rgb(var(--color-icon-action))',
			'color-icon-success': 'rgb(var(--color-icon-success))',
			'color-icon-error': 'rgb(var(--color-icon-error))',
			'color-icon-warning': 'rgb(var(--color-icon-warning))',
			'color-icon-info': 'rgb(var(--color-icon-info))',
			// CONTEXT COLORS ACTION
			'color-action-main-default':
				'rgb(var(--color-action-main-default))',
			'color-action-on-main-default':
				'rgb(var(--color-action-on-main-default))',
			'color-action-main-hover': 'rgb(var(--color-action-main-hover))',
			'color-action-main-selected':
				'rgb(var(--color-action-main-selected))',
			'color-action-alternative-default':
				'rgb(var(--color-action-alternative-default))',
			'color-action-on-alternative-default':
				'rgb(var(--color-action-on-alternative-default))',
			'color-action-disabled': 'rgb(var(--color-action-disabled))',
			'color-action-on-disabled': 'rgb(var(--color-action-on-disabled))',
			// CONTEXT COLORS BORDER
			'color-border-default': 'rgb(var(--color-border-default))',
			'color-border-focus': 'rgb(var(--color-border-focus))',
			'color-border-disabled': 'rgb(var(--color-border-disabled))',
			'color-border-alternative': 'rgb(var(--color-border-alternative))',
			'color-border-active': 'rgb(var(--color-border-active))',
			'color-border-info': 'rgb(var(--color-border-info))',
			'color-border-success': 'rgb(var(--color-border-success))',
			'color-border-warning': 'rgb(var(--color-border-warning))',
			'color-border-error': 'rgb(var(--color-border-error))',
			// CONTEXT COLORS COMPONENT SPECIFIC
			'color-button-secondary-default':
				'rgb(var(--color-button-secondary-default))',
			'color-button-secondary-on-default':
				'rgb(var(--color-button-secondary-on-default))',
			'color-button-secondary-on-hover':
				'rgb(var(--color-button-secondary-on-hover))',
			'color-button-secondary-on-pressed':
				'rgb(var(--color-button-secondary-on-pressed))',
			'color-button-secondary-on-disabled':
				'rgb(var(--color-button-secondary-on-disabled))',
			'color-tooltip': 'rgb(var(--color-tooltip))',
			'color-background-funnel': 'rgb(var(--color-background-funnel))',
			// CONTEXT COLORS SUPPORT
			'color-support-01': 'rgb(var(--color-support-01))',
			'color-support-02': 'rgb(var(--color-support-02))',
			'color-support-03': 'rgb(var(--color-support-03))',
			'color-support-04': 'rgb(var(--color-support-04))',
			'color-support-05': 'rgb(var(--color-support-05))',
			'color-support-06': 'rgb(var(--color-support-06))',
			'color-support-07': 'rgb(var(--color-support-07))',
			'color-support-08': 'rgb(var(--color-support-08))',
			'color-support-09': 'rgb(var(--color-support-09))',
			'color-support-10': 'rgb(var(--color-support-10))',
			// CONTEXT COLORS ILLUSTRATION
			'color-illustration-01': 'rgb(var(--color-illustration-01))',
			'color-illustration-02': 'rgb(var(--color-illustration-02))',
			'color-illustration-03': 'rgb(var(--color-illustration-03))',
			'color-illustration-04': 'rgb(var(--color-illustration-04))',
			'color-illustration-05': 'rgb(var(--color-illustration-05))',
			'color-illustration-06': 'rgb(var(--color-illustration-06))',
			'color-illustration-07': 'rgb(var(--color-illustration-07))',
			'color-illustration-08': 'rgb(var(--color-illustration-08))',
			'color-illustration-09': 'rgb(var(--color-illustration-09))',
			'color-illustration-10': 'rgb(var(--color-illustration-10))',
			'color-illustration-11': 'rgb(var(--color-illustration-11))',
			'color-illustration-12': 'rgb(var(--color-illustration-12))',
			'color-illustration-13': 'rgb(var(--color-illustration-13))',
			'color-illustration-14': 'rgb(var(--color-illustration-14))',
			'color-illustration-15': 'rgb(var(--color-illustration-15))',
			'color-illustration-16': 'rgb(var(--color-illustration-16))',
			'color-illustration-17': 'rgb(var(--color-illustration-17))',
			'color-illustration-18': 'rgb(var(--color-illustration-18))',
			'color-illustration-19': 'rgb(var(--color-illustration-19))',
			'color-illustration-20': 'rgb(var(--color-illustration-20))',
			'color-illustration-21': 'rgb(var(--color-illustration-21))',
			'color-illustration-22': 'rgb(var(--color-illustration-22))',
			'color-illustration-23': 'rgb(var(--color-illustration-23))',
			'color-illustration-24': 'rgb(var(--color-illustration-24))',
			'color-illustration-25': 'rgb(var(--color-illustration-25))',
			'color-illustration-26': 'rgb(var(--color-illustration-26))',
			'color-illustration-27': 'rgb(var(--color-illustration-27))',
			'color-illustration-28': 'rgb(var(--color-illustration-28))',
			'color-illustration-29': 'rgb(var(--color-illustration-29))',
			// SKELETON
			'color-skeleton-01': 'rgb(var(--color-skeleton-01))',
			// CONTEXTUAL COLORS GRAPHS GENERAL
			'color-graphs-lines': 'rgb(var(--color-graphs-lines))',
			'color-graphs-filled': 'rgb(var(--color-graphs-filled))',
			// CONTEXTUAL COLORS GRAPHS LOW DENSITY: 1 TO 8 COLORS
			'color-graphs-low-01': 'rgb(var(--color-graphs-low-01))',
			'color-graphs-low-02': 'rgb(var(--color-graphs-low-02))',
			'color-graphs-low-03': 'rgb(var(--color-graphs-low-03))',
			'color-graphs-low-04': 'rgb(var(--color-graphs-low-04))',
			'color-graphs-low-05': 'rgb(var(--color-graphs-low-05))',
			'color-graphs-low-06': 'rgb(var(--color-graphs-low-06))',
			'color-graphs-low-07': 'rgb(var(--color-graphs-low-07))',
			'color-graphs-low-08': 'rgb(var(--color-graphs-low-08))',
			// CONTEXTUAL COLORS GRAPHS MID DENSITY: 1 TO 15 COLORS
			'color-graphs-mid-01': 'rgb(var(--color-graphs-mid-01))',
			'color-graphs-mid-02': 'rgb(var(--color-graphs-mid-02))',
			'color-graphs-mid-03': 'rgb(var(--color-graphs-mid-03))',
			'color-graphs-mid-04': 'rgb(var(--color-graphs-mid-04))',
			'color-graphs-mid-05': 'rgb(var(--color-graphs-mid-05))',
			'color-graphs-mid-06': 'rgb(var(--color-graphs-mid-06))',
			'color-graphs-mid-07': 'rgb(var(--color-graphs-mid-07))',
			'color-graphs-mid-08': 'rgb(var(--color-graphs-mid-08))',
			'color-graphs-mid-09': 'rgb(var(--color-graphs-mid-09))',
			'color-graphs-mid-10': 'rgb(var(--color-graphs-mid-10))',
			'color-graphs-mid-11': 'rgb(var(--color-graphs-mid-11))',
			'color-graphs-mid-12': 'rgb(var(--color-graphs-mid-12))',
			'color-graphs-mid-13': 'rgb(var(--color-graphs-mid-13))',
			'color-graphs-mid-14': 'rgb(var(--color-graphs-mid-14))',
			'color-graphs-mid-15': 'rgb(var(--color-graphs-mid-15))',
			// CONTEXTUAL COLORS GRAPHS HIGH DENSITY: 1 TO 20 COLORS
			'color-graphs-high-01': 'rgb(var(--color-graphs-high-01))',
			'color-graphs-high-02': 'rgb(var(--color-graphs-high-02))',
			'color-graphs-high-03': 'rgb(var(--color-graphs-high-03))',
			'color-graphs-high-04': 'rgb(var(--color-graphs-high-04))',
			'color-graphs-high-05': 'rgb(var(--color-graphs-high-05))',
			'color-graphs-high-06': 'rgb(var(--color-graphs-high-06))',
			'color-graphs-high-07': 'rgb(var(--color-graphs-high-07))',
			'color-graphs-high-08': 'rgb(var(--color-graphs-high-08))',
			'color-graphs-high-09': 'rgb(var(--color-graphs-high-09))',
			'color-graphs-high-10': 'rgb(var(--color-graphs-high-10))',
			'color-graphs-high-11': 'rgb(var(--color-graphs-high-11))',
			'color-graphs-high-12': 'rgb(var(--color-graphs-high-12))',
			'color-graphs-high-13': 'rgb(var(--color-graphs-high-13))',
			'color-graphs-high-14': 'rgb(var(--color-graphs-high-14))',
			'color-graphs-high-15': 'rgb(var(--color-graphs-high-15))',
			'color-graphs-high-16': 'rgb(var(--color-graphs-high-16))',
			'color-graphs-high-17': 'rgb(var(--color-graphs-high-17))',
			'color-graphs-high-18': 'rgb(var(--color-graphs-high-18))',
			'color-graphs-high-19': 'rgb(var(--color-graphs-high-19))',
			'color-graphs-high-20': 'rgb(var(--color-graphs-high-20))',
		},
		keyframes: {
			'fade-in': {
				'0%': {
					opacity: '0',
				},
				'100%': {
					opacity: '1',
				},
			},
			'fade-in-up': {
				'0%': {
					opacity: '0',
					transform: 'translateY(40px)',
				},
				'100%': {
					opacity: '1',
					transform: 'translateY(0)',
				},
			},
			'bounce-delay': {
				'0%, 80%, 100%': {
					transform: 'scale(0.0)',
				},
				'40%': {
					transform: 'scale(1.0)',
				},
			},
			'line-anim': {
				'0%': {
					left: '-40%',
				},
				'50%': {
					left: '20%',
					width: '80%',
				},
				'100%': {
					left: '100%',
					width: '100%',
				},
			},
			transformDot: {
				transform: 'translateY(0) rotate(0deg)',
			},
			dotMove: {
				'0%': {
					transform: 'translateY(0)',
				},
				'18%, 22%': {
					transform: 'translateY(-45px)',
				},
				'40%, 100%': {
					transform: 'translateY(0)',
				},
			},
			dotRotate1: {
				'0%': {
					transform: 'rotate(-105deg)',
				},
				'100%': {
					transform: 'rotate(270deg)',
				},
			},
			dotRotate2: {
				'0%': {
					transform: 'rotate(165deg)',
				},
				'100%': {
					transform: 'rotate(540deg)',
				},
			},
			dotRotate3: {
				'0%': {
					transform: 'rotate(435deg)',
				},
				'100%': {
					transform: 'rotate(810deg)',
				},
			},
			dotRotate4: {
				'0%': {
					transform: 'rotate(705deg)',
				},
				'100%': {
					transform: 'rotate(1080deg)',
				},
			},
			bubblesRotate: {
				'0%': {
					transform: 'rotate(0deg)',
				},
				'50%': {
					transform: 'rotate(360deg)',
				},
				'100%': {
					transform: 'rotate(360deg)',
				},
			},
			bubblesAnimLeft: {
				'0%': {
					transform: 'translateX(0px) scale(1.06)',
				},
				'25%': {
					transform: 'translateX(0px) scale(1.06)',
				},
				'100%': {
					transform: 'translateX(-24px) scale(1)',
				},
			},
			bubblesAnimRight: {
				'0%': {
					transform: 'translateX(0px) scale(1.06)',
				},
				'25%': {
					transform: 'translateX(0px) scale(1.06)',
				},
				'100%': {
					transform: 'translateX(24px) scale(1)',
				},
			},
			spin: {
				'0%': {
					transform: 'rotate(0deg)',
				},
				'100%': {
					transform: 'rotate(360deg)',
				},
			},
		},
		animation: {
			'fade-in': 'fade-in 1.0s ease-out',
			'fade-in_fast': 'fade-in 0.5s ease-out',
			'fade-in-up': 'fade-in-up 0.2s ease-out',
			'bouncedelay-first':
				'bounce-delay 1.4s infinite ease-in-out -.48s both',
			'bouncedelay-second':
				'bounce-delay 1.4s infinite ease-in-out -.32s both',
			'bouncedelay-third':
				'bounce-delay 1.4s infinite ease-in-out -.16s both',
			'loader-animation': 'line-anim 1.5s ease-in-out infinite',
			spin: 'spin 1s linear infinite',
		},
	},
};
