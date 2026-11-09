
import { useState } from 'react'
import './App.css'

const imagePath = (filename) => `${import.meta.env.BASE_URL}images/${filename}`



function Navbar({ page, setPage }) {
  return (
    <nav className="navbar">
      <a
        href="/"
        className="site-logo"
        onClick={(e) => {
          e.preventDefault()
          setPage('home')
        }}
      >
        <img src={imagePath('paw.png')} alt="Pet Heaven Logo" />
      </a>

      <div className="nav-links">
        <a
          href="/"
          className={page === 'home' ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault()
            setPage('home')
          }}
        >
          Home
        </a>

        <a
          href="/pets"
          className={page === 'pets' ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault()
            setPage('pets')
          }}
        >
          Our Pets
        </a>

        <a
          href="/adopt"
          className={page === 'adopt' ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault()
            setPage('adopt')
          }}
        >
          Adoption
        </a>

        <a
          href="/release"
          className={page === 'release' ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault()
            setPage('release')
          }}
        >
          Release a Pet
        </a>


        <a
          href="/join"
          className={page === 'join' ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault()
            setPage('join')
          }}
        >
          Join Us
        </a>
        <a
          href="/about"
          className={page === 'about' ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault()
            setPage('about')
          }}
        >
          About Us
        </a>
      </div>
    </nav>
  )
}



function Hero({ setPage }) {
  return (
    <section className="hero-section">
      <img
        src={imagePath('flowers-left.png')}
        alt=""
        className="flower flower-left"
      />

      <img
        src={imagePath('Pressed Yellow Wildflower Bouquet-1.png')}
        alt=""
        className="flower flower-right"
      />

      <div className="hero-text">
        <p className="eyebrow">
          A LITTLE LOVE GOES A LONG WAY
        </p>

        <h1>A Home for Every Paw</h1>

        <p>
          A caring sanctuary helping abandoned cats and dogs
          find their forever families.
        </p>

        <a
          href="/pets"
          className="primary-button"
          onClick={(e) => {
            e.preventDefault()
            setPage('pets')
          }}
        >
          Meet Our Pets
        </a>
      </div>

      <div className="hero-art">
        <img
          src={imagePath('C&D.jpg')}
          alt="A dog and cat resting together"
          className="hero-image"
        />
      </div>
    </section>
  )
}



function Mission() {
  return (
    <section className="mission-section">
      <div>
        <span>🐾</span>
        <h3>Rescue</h3>
        <p>Give abandoned pets safety and care.</p>
      </div>

      <div>
        <span>♡</span>
        <h3>Rehabilitate</h3>
        <p>Help them heal and thrive.</p>
      </div>

      <div>
        <span>⌂</span>
        <h3>Re-home</h3>
        <p>Find their forever families.</p>
      </div>
    </section>
  )
}



const pets = [
  {
    id: 1,
    name: 'Buddy',
    type: 'Dog',
    breed: 'Golden Labrador',
    age: '2 years',
    image: imagePath('buddy.jpg'),
    personality: 'Friendly, playful and energetic',
    description:
      'Buddy is a cheerful dog who loves walks, playing outdoors and spending time with people. He is looking for a loving family who enjoys an active lifestyle.'
  },
  {
    id: 2,
    name: 'Milo',
    type: 'Cat',
    breed: 'Domestic Shorthair',
    age: '8 months',
    image: imagePath('milo.jpg'),
    personality: 'Curious, affectionate and gentle',
    description:
      'Milo is a sweet little cat who enjoys exploring his surroundings and relaxing in cosy spaces. He would love a family who can give him plenty of attention.'
  },
  {
    id: 3,
    name: 'Miki',
    type: 'Cat',
    breed: 'Domestic Shorthair',
    age: '8 year',
    image: imagePath('miki.jpg'),
    personality: 'Calm, loving and independent',
    description:
      'Miki is a gentle cat who enjoys quiet afternoons, comfortable resting spots and occasional playtime. She would make a wonderful companion in a peaceful home.'
  },
  {
    id: 4,
    name: 'Coco',
    type: 'Dog',
    breed: 'Maltese',
    age: '1 year',
    image: imagePath('coco.jpg'),
    personality: 'Cheerful, affectionate and playful',
    description:
      'Coco is a fluffy little companion who loves cuddles, attention and spending time with people. Coco would be happiest in a caring home filled with love.'
  },
  {
    id: 5,
    name: 'Luna',
    type: 'Cat',
    breed: 'Ragdoll',
    age: '3 years',
    image: imagePath('luna.jpg'),
    personality: 'Gentle, elegant and affectionate',
    description:
      'Luna is a beautiful fluffy cat who enjoys peaceful surroundings, gentle affection and relaxing beside her favourite humans.'
  },
  {
    id: 6,
    name: 'Mina',
    type: 'Cat',
    breed: 'Maine Coon',
    age: '2 years',
    image: imagePath('mina.jpg'),
    personality: 'Independent, curious and sweet',
    description:
      'Mina loves exploring, watching the world around her and finding cosy places to rest. She is looking for a patient and loving family.'
  },
  {
    id: 7,
    name: 'Pablo',
    type: 'Dog',
    breed: 'Chihuahua',
    age: '3 years',
    image: imagePath('Pablo.png'),
    personality: 'Professional troublemaker and snack enthusiast',
    description:
      'Marco has absolutely no idea what is going on, but he is very happy to be here. His hobbies include staring dramatically, demanding snacks and supervising humans. Despite his suspicious expression, Marco promises to be a very good boy.'
  }
]



function PetCard({ pet, onMeet }) {
  return (
    <article className="pet-card">
      <div className="pet-photo">
        <img
          src={pet.image}
          alt={pet.name}
          className="pet-image"
        />
      </div>

      <h3>{pet.name}</h3>

      <p>{pet.breed} · {pet.age}</p>

      <button
        type="button"
        onClick={() => onMeet(pet)}
      >
        Meet {pet.name}
      </button>
    </article>
  )
}



function FeaturedPets({ onMeet }) {
  return (
    <section className="featured-section" id="pets">
      <p className="eyebrow">
        WAITING FOR A LOVING HOME
      </p>

      <h2>Meet Our Little Friends</h2>

      <div className="pet-grid">
        {pets.slice(0, 3).map((pet) => (
          <PetCard
            key={pet.id}
            pet={pet}
            onMeet={onMeet}
          />
        ))}
      </div>
    </section>
  )
}



function OurPets({ onMeet }) {
  const [filter, setFilter] = useState('All Pets')

  const filteredPets = pets.filter((pet) => {
    if (filter === 'All Pets') {
      return true
    }

    return pet.type === filter
  })

  return (
    <section className="featured-section">
      <p className="eyebrow">
        FIND YOUR NEW BEST FRIEND
      </p>

      <h2>Our Lovely Pets</h2>

      <p>
        Meet our wonderful cats and dogs waiting
        for their forever homes.
      </p>

      <div className="pet-filters">
        <button
          type="button"
          className={filter === 'All Pets' ? 'selected' : ''}
          onClick={() => setFilter('All Pets')}
        >
          All Pets
        </button>

        <button
          type="button"
          className={filter === 'Cat' ? 'selected' : ''}
          onClick={() => setFilter('Cat')}
        >
          Cats
        </button>

        <button
          type="button"
          className={filter === 'Dog' ? 'selected' : ''}
          onClick={() => setFilter('Dog')}
        >
          Dogs
        </button>
      </div>

      <div className="pet-grid">
        {filteredPets.map((pet) => (
          <PetCard
            key={pet.id}
            pet={pet}
            onMeet={onMeet}
          />
        ))}
      </div>
    </section>
  )
}



function PetDetails({ pet, onBack, onAdopt }) {
  return (
    <section className="pet-details">
      <button
        type="button"
        className="back-button"
        onClick={onBack}
      >
        ← Back to Our Pets
      </button>

      <div className="pet-details-layout">
        <img
          src={pet.image}
          alt={pet.name}
          className="pet-details-image"
        />

        <div className="pet-details-info">
          <p className="eyebrow">
            MEET YOUR NEW FRIEND
          </p>

          <h1>Meet {pet.name}</h1>

          <p>
            <strong>Animal:</strong> {pet.type}
          </p>

          <p>
            <strong>Breed:</strong> {pet.breed}
          </p>

          <p>
            <strong>Age:</strong> {pet.age}
          </p>

          <p>
            <strong>Personality:</strong> {pet.personality}
          </p>

          <h3>A Little About Me</h3>
          <p>{pet.description}</p>

          <button
            type="button"
            className="adopt-button"
            onClick={onAdopt}
          >
            Adopt {pet.name} ♡
          </button>
        </div>
      </div>
    </section>
  )
}



function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div>
        <a
          href="/"
          className="footer-logo"
          onClick={(e) => {
            e.preventDefault()
            setPage('home')
          }}
        >
          <img
            src={imagePath('paw.png')}
            alt="Pet Heaven Logo"
          />
        </a>

      </div>

      <div className="footer-contact">
        <h3>Contact Us</h3>

        <p>
          Email:{' '}
          <a href="mailto:petheaven@outlook.com">
            petheaven@outlook.com
          </a>
        </p>

        <p>Address: 123 Birch Lane, Singapore</p>
      </div>

      <div className="footer-links">
        <h3>Quick Links</h3>

        <p>
          <a
            href="/pets"
            onClick={(e) => {
              e.preventDefault()
              setPage('pets')
            }}
          >
            Meet Our Pets
          </a>
        </p>

        <p><a href="#">About Us</a></p>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Pet Heaven. All rights reserved.</p>
      </div>
    </footer>
  )
}


function AdoptionForm({ selectedPet }) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="featured-section">
        <h2>Application Received! ♡</h2>
        <p>
          Thank you for your interest in adopting.
        </p>
      </section>
    )
  }

  return (
    <section className="adoption-section">
      <p className="eyebrow">GIVE A PET A LOVING HOME</p>
      <h2>Adoption Application</h2>

      <form onSubmit={handleSubmit} className="adoption-form">
        <label htmlFor="adopt-name">Full Name</label>
        <input
          id="adopt-name"
          type="text"
          required
          placeholder="Your full name"
        />

        <label htmlFor="adopt-email">Email Address</label>
        <input
          id="adopt-email"
          type="email"
          required
          placeholder="you@example.com"
        />

        <label htmlFor="adopt-phone">Phone Number</label>
        <input
          id="adopt-phone"
          type="tel"
          required
          placeholder="Your contact number"
        />

        <label htmlFor="adopt-pet">Pet You'd Like to Adopt</label>
        <select
          id="adopt-pet"
          key={selectedPet?.id ?? 'none'}
          defaultValue={selectedPet?.id ?? ''}
          required
        >
          <option value="" disabled>Select a pet</option>
          {pets.map((pet) => (
            <option key={pet.id} value={pet.id}>
              {pet.name}
            </option>
          ))}
        </select>

        <label htmlFor="adopt-reason">
          Why Would You Like to Adopt?
        </label>
        <textarea
          id="adopt-reason"
          rows="5"
          required
          placeholder="Tell us a little about yourself..."
        />

        <button type="submit" className="adopt-button">
          Submit Application ♡
        </button>
      </form>
    </section>
  )
}

function ReleasePet() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="adoption-section">
        <h2>Request Received!</h2>
        <p>
          Thank you for contacting Pet Heaven.
          Your release request has been submitted.
        </p>
      </section>
    )
  }

  return (
    <section className="adoption-section">
      <p className="eyebrow">WE'RE HERE TO HELP</p>

      <h2>Release a Pet</h2>

      <p>
        We understand that circumstances can change.
        If you can no longer care for your pet,
        please complete the form below.
      </p>

      <form className="adoption-form" onSubmit={handleSubmit}>
        <label htmlFor="owner-name">Full Name</label>
        <input
          id="owner-name"
          type="text"
          placeholder="Your full name"
          required
        />

        <label htmlFor="owner-email">Email Address</label>
        <input
          id="owner-email"
          type="email"
          placeholder="you@example.com"
          required
        />

        <label htmlFor="pet-name">Pet's Name</label>
        <input
          id="pet-name"
          type="text"
          placeholder="Your pet's name"
          required
        />

        <label htmlFor="pet-type">Pet Type</label>
        <select id="pet-type" required defaultValue="">
          <option value="" disabled>Select pet type</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
        </select>

        <label htmlFor="release-reason">
          Reason for Releasing Your Pet
        </label>
        <textarea
          id="release-reason"
          rows="5"
          placeholder="Tell us about your circumstances..."
          required
        />

        <button type="submit" className="adopt-button">
          Submit Request
        </button>
      </form>
    </section>
  )
}

function JoinUs() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="adoption-section">
        <h2>Application Received!</h2>
        <p>
          Thank you for volunteering with Pet Heaven!
          Your application has been received.
        </p>
      </section>
    )
  }

  return (
    <section className="adoption-section">
      <p className="eyebrow">MAKE A DIFFERENCE</p>

      <h2>Join Our Team ♡</h2>

      <p>
        Every helping hand makes a difference.
      </p>

      <p> Join Pet Heaven as a volunteer and help us
        provide rescued animals with the love and
        care they deserve</p>

      <form className="adoption-form" onSubmit={handleSubmit}>

        <label htmlFor="volunteer-name">Full Name</label>
        <input
          id="volunteer-name"
          type="text"
          placeholder="Your full name"
          required
        />

        <label htmlFor="volunteer-email">Email Address</label>
        <input
          id="volunteer-email"
          type="email"
          placeholder="you@example.com"
          required
        />

        <label htmlFor="volunteer-phone">Phone Number</label>
        <input
          id="volunteer-phone"
          type="tel"
          placeholder="Your contact number"
          required
        />

        <label htmlFor="volunteer-role">
          Preferred Volunteer Role
        </label>
        <select id="volunteer-role" defaultValue="" required>
          <option value="" disabled>Select a role</option>
          <option value="Animal Care">Animal Care</option>
          <option value="Dog Walking">Dog Walking</option>
          <option value="Adoption Events">Adoption Events</option>
          <option value="Fundraising">Fundraising</option>
        </select>

        <label htmlFor="volunteer-availability">
          Availability
        </label>
        <select
          id="volunteer-availability"
          defaultValue=""
          required
        >
          <option value="" disabled>Select availability</option>
          <option value="Weekdays">Weekdays</option>
          <option value="Weekends">Weekends</option>
          <option value="Flexible">Flexible</option>
        </select>

        <label htmlFor="volunteer-reason">
          Why Would You Like to Volunteer?
        </label>
        <textarea
          id="volunteer-reason"
          rows="5"
          placeholder="Tell us why you'd like to join..."
          required
        />

        <button type="submit" className="adopt-button">
          Submit Application
        </button>

      </form>
    </section>
  )
}

function AboutUs({ setPage }) {
  return (
    <section className="adoption-section about-section">
      <h2>About Pet Heaven</h2>

      <img
          src={imagePath('banner.png')}
          alt="A dog and cat resting together"
          className="about-image"
        />

      <p>
        Pet Heaven is a pet adoption organisation dedicated
        to helping abandoned and rescued animals find safe,
        loving and permanent homes.
      </p>

      <div className="about-cards">
  <div className="about-card">
    <h2>Our Mission</h2>
    <p>
      We believe that every animal deserves a second chance.
      Through rescue, rehabilitation and responsible adoption,
      we aim to improve the lives of animals in need.
    </p>
  </div>

  <div className="about-card">
    <h2>Why Choose Adoption?</h2>
    <p>
      Adopting a pet gives an animal a new beginning.
      By choosing adoption, you are providing a loving home
      while supporting efforts to reduce animal abandonment.
    </p>
  </div>
</div>
<div className="about-cta">
  <h2>Be Part of Their Story</h2>

  <p>
    Help us create happier endings, one paw at a time.
  </p>

  <div className="about-cta-buttons">
    <button onClick={() => setPage('pets')}>
      Meet Our Pets ♡
    </button>

    <button onClick={() => setPage('join')}>
      Join Us
    </button>
  </div>
</div>
    </section>
  )
}

function App() {
  const [page, setPage] = useState('home')
  const [selectedPet, setSelectedPet] = useState(null)

  function changePage(newPage) {
    setPage(newPage)
    window.scrollTo(0, 0)
  }



  function openPet(pet) {
    setSelectedPet(pet)
    changePage('details')
  }

  function openAdoption() {
    changePage('adopt')
  }

  return (
    <div className="site-wrapper">
      <Navbar
        page={page}
        setPage={changePage}
      />

      <main>
        {page === 'home' && (
          <>
            <Hero setPage={changePage} />
            <Mission />
            <FeaturedPets onMeet={openPet} />
          </>
        )}

        {page === 'pets' && (
          <OurPets onMeet={openPet} />
        )}

        {page === 'details' && selectedPet && (
          <PetDetails
            pet={selectedPet}
            onBack={() => changePage('pets')}
            onAdopt={openAdoption}
          />
        )}

       {page === 'adopt' && (
          <AdoptionForm selectedPet={selectedPet} />
        )}

        {page === 'release' && <ReleasePet />}


        {page === 'join' && <JoinUs />}


        {page === 'about' && <AboutUs setPage={changePage} />}
      </main>

              <Footer setPage={changePage} />
            </div>
          )
        }

export default App
