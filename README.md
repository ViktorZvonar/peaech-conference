# React Conference Application for "PEACE EDUCATION FOR CONSOLIDATED AND HUMAN-CENTERED EUROPE 2023"

Use link: https://peaech-conference.netlify.app/

## Overview

This application is designed for the PEACE EDUCATION FOR CONSOLIDATED AND
HUMAN-CENTERED EUROPE 2023 online conference. The app provides three main views:
Home, Speakers, and Materials. Each view offers a unique perspective on the
conference's offerings.

## Components Description

Home This is the landing page of the application. It provides an introduction to
the conference, including its date, theme, and the broader Erasmus+ project
context. Additionally, it presents a list of moderators for the conference.

Speakers This page showcases the keynote speakers for the conference.

Materials This section lists reference materials and other resources related to
the conference. The resources are fetched from Firebase. Users can paginate
through the list and download the materials in PDF format.

Container, Header, & Footer These components respectively wrap the main content,
display a top-level navigation bar, and provide footer information for the
application.

## Dependencies

react: For building the user interface. react-router-dom: To manage navigation
and routing for the application. firebase: For database operations, fetching
materials, and file storage functionalities.
