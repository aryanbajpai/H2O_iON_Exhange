import React from 'react'

const Container = ({ children, classname1, classname2 }) => {
  return (
    <main className={`w-full ${classname1}`}>
        <section className={`w-full px-8 lg:mx-auto lg:w-[85%] xl:w-[77%] 2xl:w-[62%] ${classname2}`}>
            {children}
        </section>
    </main>
  )
}

export default Container;