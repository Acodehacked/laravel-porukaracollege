<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventResource;
use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    //
    public function index()
    {
        $events = Event::orderByDesc('date')->get();
        return Inertia::render('Admin/Events/Index', [
            'events' => EventResource::collection($events)
        ]);
    }
    public function create()
    {
        // $courses = Event::all();
        return Inertia::render('Admin/Events/Create');
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:256|unique:events,title',
            'description' => 'nullable|string|max:500',
            'date' => 'date',
            'images' => 'nullable|array',
            'images.*' => 'nullable|string', // Ensure each image in the JSON array is a string
            'eventType' => 'in:UpcomingEvent,Announcement,Events,NSS Event',
            'link' => 'nullable|string|max:256|url',
        ]);

        // Create a new event record
        $event = Event::create([
            'title' => $validated['title'],
            'description' => $validated['description'] ?? null,
            'date' => $validated['date'] ?? null,
            'images' => $validated['images'] ?? null,
            'event_type' => $validated['eventType'] ?? null,
            'link' => $validated['link'] ?? null,
        ]);

        // Return a response
        // return response()->json([
        //     'message' => 'Event created successfully.',
        //     'data' => $event,
        // ], 201);
        return redirect()->route('adminevents.index')->with('success', 'Event Added Successfully!');
    }

    /**
     * Display the specified course.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $event = Event::findOrFail($id);
        return Inertia::render('Admin/Events/Update', [
            'event' => new EventResource($event)
        ]);
    }

    /**
     * Update the specified course in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:256',
            'description' => 'nullable|string|max:500',
            'date' => 'required|date',
            'images' => 'nullable|array',
            'images.*' => 'nullable|string', // Ensure each image in the JSON array is a string
            'event_type' => 'in:UpcomingEvent,Announcement,Events,NSS Event',
            'link' => 'nullable|string|max:256|url',
        ]);

        $course = Event::findOrFail($id);
        $course->update($validated);

        return redirect()->route('adminevents.index')->with('success','Updated Successfully');
    }

    /**
     * Remove the specified course from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $course = Event::findOrFail($id);
        $course->delete();

        return redirect()->back()->with('success','Deleted Successfully');
    }
}
