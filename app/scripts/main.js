$(document).ready(function () {
    window.i18n = window.i18n();

    var catalog = {
        'guru': [
            {
                'el': $('h1'),
                'method': 'html',
                'value': {
                    'fr': 'Cher <strong>Organization Guru</strong>, essayez Solid pour des réunions 100% efficaces',
                    'en': 'Dear  <strong>Organization Guru</strong>, try Solid for actionable meetings'
                }
            }
        ],
        'master': [
          {
            'el': $('h1'),
            'method': 'html',
            'value': {
              'fr': 'Cher <strong>Time Master</strong>, essayez Solid pour des réunions 100% efficaces',
              'en': 'Dear  <strong>Time Master</strong>, try Solid for actionable meetings'
            }
          }
        ],
        'meeting': [
            {
              'el': $('h1'),
              'method': 'html',
              'value': {
                'fr': 'Cher <strong>Meeting Specialist</strong>, essayez Solid pour des réunions 100% efficaces',
                'en': 'Dear  <strong>Meeting Specialist</strong>, try Solid for actionable meetings'
              }
            }
        ],
        'brainstormer': [
          {
            'el': $('h1'),
            'method': 'html',
            'value': {
              'fr': 'Cher <strong>Brainstormer</strong>, essayez Solid pour des réunions 100% efficaces',
              'en': 'Dear  <strong>Brainstormer</strong>, try Solid for actionable meetings'
            }
          }
        ],
        'early-access': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez un compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create an account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "<strong>Bienvenue !</strong> Accédez avant tout le monde à notre beta privée.",
              'en': "<strong>You're special!</strong> Get instant access to our private beta."
            }
          }
        ],
        'hello-stripe': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>Stripe</strong> ! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>Stripe</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-theodo': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>Theodo</strong> ! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>Theodo</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-webnamaste': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>Webnamaste</strong> ! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>Webnamaste</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-welink': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>We Link</strong> ! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>We Link</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-thefamily': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>The Family</strong> ! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>The Family</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-thefamily': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>The Family</strong>! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>The Family</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-plumelabs': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>Plume Labs</strong>! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>Plume Labs</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-openclassrooms': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>OpenClassrooms</strong>! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>OpenClassrooms</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-moofiz': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>Moofiz</strong>! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>Moofiz</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-medallia': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>Medallia</strong>! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>Medallia</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-learnassembly': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>LearnAssembly</strong>! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>LearnAssembly</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-infologistics': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>Info Logistics</strong>! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>Info Logistics</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-iadvize': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>iAdvize</strong>! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>iAdvize</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-stride': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>Stride</strong>! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>Stride</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-gocardless': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>GoCardless</strong>! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>GoCardless</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-hopecollege': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>Hope College</strong>! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>Hope College</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-drivy': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>Drivy</strong>! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>Drivy</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-brainshots': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>Brainshots</strong>! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>Brainshots</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-blablacar': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>Blablacar</strong>! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>Blablacar</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-etna': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>ETNA</strong>! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>ETNA</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-zendesk': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>Zendesk</strong>! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>Zendesk</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-aurea': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>Aurea</strong>! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>Aurea</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-alven': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>Alven</strong> ! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>Alven</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-numa': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>Numa</strong> ! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>Numa</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-air-liquide': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>Air Liquide</strong> ! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>Air Liquide</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-50-partners': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Coucou <strong>le Loft 50 Partners</strong> ! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>Loft 50 Partners</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-pretdunion': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Coucou <strong>Prêt d'Union</strong> ! Accédez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>Prêt d'Union</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-early-adopters': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Hello <strong>Early Adopter</strong> ! Accède avant tout le monde à notre beta privée. We are the 15% ;)",
              'en': "👋 Hello <strong>Early Adopter</strong>! Get instant access to our private beta below. We are the 15% ;)"
            }
          }
        ],
        'hello-valeo': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>Valeo</strong> ! Accèdez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>Valeo</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-lafargeholcim': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>LafargeHolcim</strong> ! Accèdez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>LafargeHolcim</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-abb': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>ABB</strong> ! Accèdez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>ABB</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-hec-mnt': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>MNT</strong> ! Accèdez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>MNT</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-hec': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>HEC</strong> ! Accèdez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>HEC</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'i-love-parsley': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Bonjour <strong>Parsley lover</strong> ! Accède avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hello <strong>Parsley lover</strong>! Get instant access to our private beta below."
            }
          }
        ],
        'hello-lima': [
          {
            'el': $('#cta'),
            'method': 'html',
            'value': {
              'fr': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Créez votre compte</a>',
              'en': '<a class="btn btn-default i18n" href="http://solid.wisembly.com">Create your account</a>'
            }
          },
          {
            'el': $('.notification .container'),
            'method': 'html',
            'value': {
              'fr': "👋 Salut l'équipe <strong>Lima</strong> ! Accèdez avant tout le monde à notre beta privée ci-dessous.",
              'en': "👋 Hey <strong>Lima</strong> team! Get instant access to our private beta below."
            }
          }
        ],
    };

    var testCatalog = function (catalog) {
        var j;
        for (i in catalog)
            for (j = 0; j < catalog[i].length; j++)
                if (!catalog[i][j].el.length)
                    console.warn('element position ' + j + ' for ' + i + ' key is invalid');
        console.log('if no warning occured you are good to go sir!');
    };

    var versio = function (catalog, lang, version) {

        if ('undefined' === typeof version && window.location.hash.length)
            version = window.location.hash.replace('#', '');

        if (!catalog[version])
            return;

        var i, action = catalog[version];

        for (i = 0; i < action.length; i++) {
            if (!action[i].el.length) {
                console.warn('element for replacement at position ' + i + ' not found.');
                continue;
            }

            action[i].el[action[i].method](action[i].value[lang]);
        }
    };

    versio(catalog, 'en');

    // Load asynchronously 'fr' translations
    $.getJSON('i18n/messages.fr.json', function (json) {
        window.i18n.loadJSON(json);

        if ('fr' === getParameterByName('lang')) {
            $('#dLabel').html('Français');
            switchLocale('fr');
            versio(catalog, 'fr');
        }
    });

    window.renderLocalizations = function () {
        $('.i18n').each(function () {
            var re = /-([a-z]{2})\./gi;

            if ($(this).children('img').attr('src')) {
                if ((m = re.exec($(this).children('img').attr('src'))) != null)
                    $(this).children('img').attr('src', $(this).children('img').attr('src').replace(m[0], '-' + window.i18n.getLocale() + '.'));
                return;
            }

            var msgid = ($(this).data('i18n') || $(this).html()).trim();
            $(this).data('i18n', msgid);
            $(this).html(window.i18n.gettext(msgid));
        });
    };

    window.switchLocale = function (locale) {
        window.i18n.setLocale(locale);
        renderLocalizations();
        versio(catalog, locale);
    };

    $('.dropdown ul li').click(function() {
        var text = $(this).html();
        $('#dLabel').html(text);
        switchLocale($(this).data('lang'));
    });

    renderLocalizations();
});

var getParameterByName = function (name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

// read ga cookie to get referrer info

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  createCookie(name);
}

var utmz;
var vals = (function() {
  try {
    utmz = readCookie('__utmz');
    var pairs = utmz.split('.').slice(4).join('.').split('|');
    var ga = {};
    for (var i = 0; i < pairs.length; i++) {
      var temp = pairs[i].split('=');
        ga[temp[0]] = temp[1];
    }
    return ga;
  } catch (e) {
    return {};
  };
})();

// prefinery

var prefinery_apply_options = {
  account: "wisembly",
  beta_id: "4990",
  link_id: "prefinery_apply_link",
  link_class: "prefinery_apply",
  version: 2
};

Prefinery.apply(prefinery_apply_options);

var prefinery_form_url =
  'https://' + Prefinery.konfig.account +
  '.prefinery.com/betas/' + Prefinery.konfig.beta_id +
  '/testers/new?display=popup&version=' + Prefinery.konfig.version +
  '&referrer=' + vals.utmcsr + '-' + vals.utmcmd + '-' + vals.utmccn + '-' + vals.utmctr;

// build tracking url for ga.js

var gaPageURL;

_gaq.push(function() {
  var pageTracker = _gat._getTrackerByName();
  gaPageURL = pageTracker._getLinkerUrl(prefinery_form_url);
  // gaReferrer = ;
});

$(document).on('click', '.show-prefinery-form', function () {
  formURL = gaPageURL || prefinery_form_url;
  Prefinery.show(formURL);
});
