---
layout: post
title:  "cs4995.008 Advanced Systems Programming Spring 2024"
date:   2023-10-23
---

Overview
--------
This course focuses on advanced systems programming, covering modern interfaces,
libraries, and services used in today’s UNIX-based operating systems. Students
will gain an understanding of how they are implemented and learn how to use
them.

Prerequisites
-------------
### COMS 3157 Advanced Programming
* Solid C programming experience and proficiency in UNIX command line
  environment

### CSEE 3827 Fundamentals of Computer Systems
* Basic knowledge of computer hardware: register, cache, etc. Should be able to
  read simple assembly code (load, store, add, jump, etc.)

### COMS 3134 Data Structures
* Solid on fundamental data structures (list, tree, stack, queue, etc.)

Textbooks
---------
* **Advanced Programming in the UNIX Environment (APUE)**  
  3rd Edition, 2013, Addison-Wesley – by W. Richard Stevens, Stephen A. Rago


* **Computer Systems: A Programmer’s Perspective (CSAPP)**  
  3rd Edition, 2015, Pearson – by Randal E. Bryant and David R. O'Hallaron

* Various other online guides, blog posts, and original papers

Topics Covered
--------------
This list is still subject to change, but here's a high-level list of topics
we're planning to cover.

* UNIX system fundamentals
* Git and GitHub
* Virtual memory, storage hierarchy, memory allocators
* File I/O
* Interprocess communication
* Threads and synchronization
* Processes and exceptional control flow
* Linkers, loaders, debuggers
* Containers

FAQ
---
### Should I take ASP or OS? What’s the difference between them?

ASP aims to expose students to various interfaces/libraries/services in the UNIX
system from the userspace perspective to get a better understanding of how to
use them and to get more C programming experience. OS covers many of the same
topics, but from the operating system’s perspective, requiring a deep
understanding of C and the ability to read and write code in the Linux codebase.

ASP will help you if you want to take OS later because you’ll get more C
programming earlier on. You’ll also be exposed to more systems concepts from the
user’s perspective and be able to appreciate them more when you learn about them
from the operating system’s perspective when you go on to take OS. However, ASP
is **not** a prerequisite for OS. You can definitely take OS before ASP. You’ll
come into ASP already having solid C programming experience and be able to pick
up userspace systems concepts that you learned about from the operating system’s
perspective in OS. The two classes complement each other!

### How much time should I expect to spend on homework assignments?

You should expect the homework assignments to be between the difficulty of AP
and OS. We're planning for the assignments to be group-based, but it's too early
for us to commit to that. If you're coming in already having taken OS/have
significant C programming experience, you're probably a lot better prepared for
the coding in this course – the intermediate nature of ASP is meant to help
students ramp up to the difficulty of the higher level systems courses, after
all. 

### I took OS in a previous semester, is there any overlap? Is ASP still worth taking?

Jae's previous offerings of OS dedicated about 7 lectures covering advanced
userspace systems programming. We’ve now taken those 7 lectures out of Jae’s OS
offering and expanded it to be just under half of ASP, covering topics in
greater depth and adding material we had to skip over. The remaining portion of
the course is new material. If you’re coming in having taken OS in a previous
semester with Jae, you’ll already know some of the material, but not enough that
the class will be redundant.

Since ASP and OS are complementary, it’s still very worth it to take ASP after
OS. You’ll already have an appreciation for the tricky implementation details
the operating system hides behind various interfaces and you’ll learn how to use
those interfaces to write userspace software. Here's just one exciting example:
in OS, you learn how the kernel uses paging to implement a virtual memory system
and about various related syscalls (e.g., brk, mmap). In ASP, you’ll learn how
to implement a userspace malloc library that uses the kernel's virtual memory
system interface and enables userspace programs to dynamically allocate memory
without having to directly invoke syscalls or think about paging!
