import React from 'react'

const Container = ({ children, classname1, classname2 }) => {
  return (
    <main className={`w-full ${classname1}`}>
        <section className={`w-full lg:w-[77%] mx-auto ${classname2}`}>
            {children}
        </section>
    </main>
  )
}

export default Container;