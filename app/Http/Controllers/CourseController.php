<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseController extends Controller
{
    //
    public function publicShow($slug){
        $course = Course::where('slug',$slug)->firstOrFail();
        return Inertia::render('Common/Courses/Show', [
            'course' => $course,
            'courses' => Course::all()
        ]);
    }
    public function index()
    {
        $courses = Course::all();
        return Inertia::render('Admin/Courses/Index', [
            'courses' => $courses
        ]);
    }
    public function create()
    {
        $courses = Course::all();
        return Inertia::render('Admin/Courses/Create', [
            'courses' => $courses
        ]);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'text' => 'required|string',
            'description' => 'nullable|string',
            'duration' => 'required|integer|min:1',
            'image' => 'nullable|string',
            'eligibility' => 'required|string',
            'link' => 'nullable|string',
            'slug' => 'required|string|unique:courses,slug',
            'specializations' => 'nullable|array',
        ]);

        $course = Course::create($validated);
        return redirect()->route('admincourses.index')->with(['success','Course Added Successfully!']);
    }

    /**
     * Display the specified course.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $course = Course::findOrFail($id);
        return Inertia::render('Admin/Courses/Update', [
            'course' => $course
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
            'title' => 'sometimes|required|string|max:255',
            'text' => 'sometimes|required|string',
            'description' => 'nullable|string',
            'duration' => 'sometimes|required|integer|min:1',
            'image' => 'nullable|string',
            'eligibility' => 'sometimes|required|string',
            'link' => 'nullable|string',
            'slug' => 'sometimes|required|string|unique:courses,slug,' . $id,
            'specializations' => 'nullable|array',
            'specializations.*' => 'string',
        ]);

        $course = Course::findOrFail($id);
        $course->update($validated);

        return redirect()->route('admincourses.index');
    }

    /**
     * Remove the specified course from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $course = Course::findOrFail($id);
        $course->delete();

        return redirect()->route('admincourses.index');
    }
}
