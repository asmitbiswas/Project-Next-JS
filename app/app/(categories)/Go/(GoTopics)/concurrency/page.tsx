"use client";

const codeBlock: React.CSSProperties = {
  background: "#0d1117",
  border: "1px solid #242b35",
  borderRadius: "8px",
  padding: "18px",
  overflowX: "auto",
  fontSize: "14px",
  lineHeight: "1.7",
  color: "#e6edf3",
  margin: "18px 0 28px",
  fontFamily:
    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
};

const heading: React.CSSProperties = {
  fontSize: "27px",
  lineHeight: "1.3",
  letterSpacing: "-0.6px",
  margin: "48px 0 16px",
  color: "#f0f6fc",
};

const paragraph: React.CSSProperties = {
  color: "#a8b3c0",
  fontSize: "15px",
  lineHeight: "1.8",
  margin: "0 0 18px",
};

const inlineCode: React.CSSProperties = {
  background: "#161b22",
  border: "1px solid #30363d",
  borderRadius: "5px",
  padding: "2px 6px",
  color: "#79c0ff",
  fontSize: "13px",
  fontFamily:
    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
};

const note: React.CSSProperties = {
  background: "#11161d",
  borderLeft: "3px solid #58a6ff",
  borderRadius: "0 7px 7px 0",
  padding: "15px 17px",
  color: "#9da7b3",
  fontSize: "14px",
  lineHeight: "1.7",
  margin: "24px 0",
};

export default function ConcurrencyPage() {
  return (
    <main
      style={{
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "52px 60px 100px",
        boxSizing: "border-box",
        marginLeft:"-20px"
      }}
    >
      <div
        style={{
          color: "#58a6ff",
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "0.5px",
          marginBottom: "14px",
        }}
      >
        GO / CONCURRENCY
      </div>

      <h1
        style={{
          fontSize: "46px",
          lineHeight: "1.1",
          letterSpacing: "-1.8px",
          margin: "0 0 18px",
          color: "#f0f6fc",
          fontWeight: 800,
        }}
      >
        Concurrency
      </h1>

      <p
        style={{
          color: "#8b949e",
          fontSize: "17px",
          lineHeight: "1.75",
          margin: "0 0 38px",
          maxWidth: "760px",
        }}
      >
        Concurrency allows Go programs to handle multiple tasks efficiently.
        Go makes concurrency simple with goroutines, channels, and
        synchronization tools.
      </p>

      <div
        style={{
          background: "#10161d",
          border: "1px solid #28313b",
          borderRadius: "9px",
          padding: "17px 19px",
          marginBottom: "42px",
        }}
      >
        <div
          style={{
            color: "#58a6ff",
            fontSize: "13px",
            fontWeight: 700,
            marginBottom: "7px",
          }}
        >
          What you will learn
        </div>

        <div
          style={{
            color: "#a8b3c0",
            fontSize: "13px",
            lineHeight: "1.7",
          }}
        >
          Goroutines · Channels · Buffered Channels · Select · WaitGroup ·
          Mutexes
        </div>
      </div>

      <h2 style={heading}>What is Concurrency?</h2>

      <p style={paragraph}>
        Concurrency means dealing with multiple tasks during the same period of
        time. A concurrent program can start one task while another task is
        still running.
      </p>

      <p style={paragraph}>
        Go was designed with concurrency in mind. Instead of manually managing
        complicated threads, Go provides lightweight{" "}
        <strong style={{ color: "#f0f6fc" }}>goroutines</strong> and{" "}
        <strong style={{ color: "#f0f6fc" }}>channels</strong>.
      </p>

      <div style={note}>
        <strong style={{ color: "#f0f6fc" }}>Important:</strong> Concurrency
        and parallelism are not exactly the same. Concurrency is about handling
        multiple tasks, while parallelism means executing multiple tasks at
        the same time.
      </div>

      <h2 style={heading}>Goroutines</h2>

      <p style={paragraph}>
        A goroutine is a lightweight function that runs independently from the
        function that started it.
      </p>

      <p style={paragraph}>
        Start a goroutine by placing the{" "}
        <code style={inlineCode}>go</code> keyword before a function call.
      </p>

      <pre style={codeBlock}>
        <code>{`package main

import (
    "fmt"
    "time"
)

func sayHello() {
    fmt.Println("Hello from goroutine!")
}

func main() {
    go sayHello()

    time.Sleep(time.Second)
}`}</code>
      </pre>

      <p style={paragraph}>
        The <code style={inlineCode}>go</code> keyword tells Go to execute the
        function as a goroutine instead of waiting for it to finish normally.
      </p>

      <h2 style={heading}>Running Multiple Goroutines</h2>

      <p style={paragraph}>
        Multiple goroutines can run concurrently inside the same program.
      </p>

      <pre style={codeBlock}>
        <code>{`package main

import (
    "fmt"
    "time"
)

func task(name string) {
    for i := 1; i <= 3; i++ {
        fmt.Println(name, i)
        time.Sleep(300 * time.Millisecond)
    }
}

func main() {
    go task("Task A")
    go task("Task B")

    time.Sleep(2 * time.Second)
}`}</code>
      </pre>

      <p style={paragraph}>
        Here, both tasks are started as goroutines. Their output can appear
        interleaved because they are running concurrently.
      </p>

      <h2 style={heading}>Channels</h2>

      <p style={paragraph}>
        Goroutines often need to communicate with each other. Go provides
        channels for safely sending values between goroutines.
      </p>

      <p style={paragraph}>
        Create a channel with <code style={inlineCode}>make</code>.
      </p>

      <pre style={codeBlock}>
        <code>{`numbers := make(chan int)`}</code>
      </pre>

      <p style={paragraph}>
        Send a value into a channel using the{" "}
        <code style={inlineCode}>&lt;-</code> operator.
      </p>

      <pre style={codeBlock}>
        <code>{`numbers <- 42`}</code>
      </pre>

      <p style={paragraph}>
        Receive a value from the channel using the same operator.
      </p>

      <pre style={codeBlock}>
        <code>{`value := <-numbers`}</code>
      </pre>

      <h2 style={heading}>Channel Example</h2>

      <p style={paragraph}>
        A goroutine can calculate a value and send the result to another
        goroutine through a channel.
      </p>

      <pre style={codeBlock}>
        <code>{`package main

import "fmt"

func calculate(result chan int) {
    result <- 10 + 20
}

func main() {
    result := make(chan int)

    go calculate(result)

    value := <-result

    fmt.Println(value)
}`}</code>
      </pre>

      <div style={note}>
        Receiving from a channel waits until a value is available. This makes
        channels useful for communication and synchronization.
      </div>

      <h2 style={heading}>Buffered Channels</h2>

      <p style={paragraph}>
        A normal channel does not store values without a receiver. A buffered
        channel can store a limited number of values.
      </p>

      <pre style={codeBlock}>
        <code>{`numbers := make(chan int, 3)

numbers <- 10
numbers <- 20
numbers <- 30

fmt.Println(<-numbers)
fmt.Println(<-numbers)
fmt.Println(<-numbers)`}</code>
      </pre>

      <p style={paragraph}>
        The <code style={inlineCode}>3</code> means the channel can hold three
        values before the sender has to wait.
      </p>

      <h2 style={heading}>Closing Channels</h2>

      <p style={paragraph}>
        A sender can close a channel when it will not send any more values.
      </p>

      <pre style={codeBlock}>
        <code>{`numbers := make(chan int)

go func() {
    numbers <- 10
    numbers <- 20
    numbers <- 30

    close(numbers)
}()

for value := range numbers {
    fmt.Println(value)
}`}</code>
      </pre>

      <p style={paragraph}>
        The <code style={inlineCode}>range</code> loop continues receiving
        values until the channel is closed.
      </p>

      <h2 style={heading}>Select</h2>

      <p style={paragraph}>
        The <code style={inlineCode}>select</code> statement allows a goroutine
        to wait for multiple channel operations.
      </p>

      <pre style={codeBlock}>
        <code>{`select {
case message := <-channelA:
    fmt.Println("A:", message)

case message := <-channelB:
    fmt.Println("B:", message)
}`}</code>
      </pre>

      <p style={paragraph}>
        When one or more cases are ready, Go executes one of them.
      </p>

      <h2 style={heading}>WaitGroup</h2>

      <p style={paragraph}>
        Sometimes the main function needs to wait until several goroutines
        finish. The <code style={inlineCode}>sync.WaitGroup</code> is useful for
        this.
      </p>

      <pre style={codeBlock}>
        <code>{`package main

import (
    "fmt"
    "sync"
)

func worker(id int, wg *sync.WaitGroup) {
    defer wg.Done()

    fmt.Println("Worker", id, "finished")
}

func main() {
    var wg sync.WaitGroup

    for i := 1; i <= 3; i++ {
        wg.Add(1)
        go worker(i, &wg)
    }

    wg.Wait()

    fmt.Println("All workers finished")
}`}</code>
      </pre>

      <p style={paragraph}>
        <code style={inlineCode}>Add()</code> increases the number of
        goroutines to wait for. <code style={inlineCode}>Done()</code> marks a
        goroutine as finished, while <code style={inlineCode}>Wait()</code>{" "}
        blocks until all goroutines are complete.
      </p>

      <h2 style={heading}>Mutex</h2>

      <p style={paragraph}>
        When multiple goroutines access the same data, they can interfere with
        each other. A mutex can protect shared data from being accessed at the
        same time.
      </p>

      <pre style={codeBlock}>
        <code>{`package main

import (
    "fmt"
    "sync"
)

var counter int
var mutex sync.Mutex

func increment(wg *sync.WaitGroup) {
    defer wg.Done()

    mutex.Lock()
    counter++
    mutex.Unlock()
}

func main() {
    var wg sync.WaitGroup

    for i := 0; i < 100; i++ {
        wg.Add(1)
        go increment(&wg)
    }

    wg.Wait()

    fmt.Println(counter)
}`}</code>
      </pre>

      <p style={paragraph}>
        <code style={inlineCode}>Lock()</code> prevents other goroutines from
        accessing the protected section at the same time.{" "}
        <code style={inlineCode}>Unlock()</code> releases the lock.
      </p>

      <h2 style={heading}>Race Conditions</h2>

      <p style={paragraph}>
        A race condition can happen when multiple goroutines access shared
        data at the same time and the result depends on the order in which the
        operations happen.
      </p>

      <pre style={codeBlock}>
        <code>{`var counter int

go func() {
    counter++
}()

go func() {
    counter++
}()`}</code>
      </pre>

      <p style={paragraph}>
        Both goroutines are trying to modify{" "}
        <code style={inlineCode}>counter</code>. Without proper synchronization,
        the result can be unpredictable.
      </p>

      <div style={note}>
        <strong style={{ color: "#f0f6fc" }}>Remember:</strong> use channels
        when goroutines need to communicate, and synchronization tools such as
        mutexes when goroutines need to safely access shared data.
      </div>

      <h2 style={heading}>Concurrency in Practice</h2>

      <p style={paragraph}>
        Concurrency is useful for tasks such as handling multiple HTTP
        requests, processing files, running background jobs, downloading data,
        and building network services.
      </p>

      <pre style={codeBlock}>
        <code>{`func handleRequest(id int) {
    fmt.Println("Handling request", id)
}

func main() {
    for i := 1; i <= 5; i++ {
        go handleRequest(i)
    }

    time.Sleep(time.Second)
}`}</code>
      </pre>

      <p style={paragraph}>
        Instead of processing every request one after another, Go can start a
        goroutine for each independent task.
      </p>

    
    </main>
  );
}